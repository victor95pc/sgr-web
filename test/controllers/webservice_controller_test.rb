require 'test_helper'

class WebserviceControllerTest < ActionController::TestCase
  setup do
    @cartao_maria = cartoes(:cartao_maria)
    @numero_cartao_maria = @cartao_maria.numero_cartao

    @cliente_victor = clientes(:victor)

    @cliente_ester = clientes(:ester)
    @numero_cartao_ester = @cliente_victor.cartao.numero_cartao

  end

  test 'Mudar preco por kilo de comida -- MudarPrecoComandaGlobal' do
    get :mudar_preco, {valor_kg: 20.0}
    assert_response :ok
  end

  test 'Adicionar compra ao cartao -- WebService' do
    get :adicionar_comanda, {cartao: @numero_cartao_maria.to_i.to_s(16), codigos: %w[00000001 00000002], quantidades: %w[1, 2], peso: 1.5}
    assert_response :ok
  end

  test 'Vincular cliente ao cartao -- WebServiceAdicionarCliente' do
    get :vincular_cliente, {cartao: @numero_cartao_maria, nome: 'Maria', telefone: '71718585', cep: '23550371'}
    assert_response :ok
  end

  test 'Desvincular cliente -- WebServiceDesvincularCliente' do
    if @cartao_maria.cliente.blank?
      cliente = Cliente.new cartao: @cartao_maria, nome: 'Maria', telefone: '71718585', cep: '23550371'
      cliente.save!
    end
    get :desvincular_cliente, {cartao: @numero_cartao_maria}
    assert_response :ok
  end

  test 'Mudar Status da comanda -- WebServiceMudarStatus' do
    #Adicionando uma compra
    comanda = Comanda.new cartao: @cartao_maria, valor: Configuracao.calcular_peso(1.5), peso: 1.5, status: 1
    comanda.save!

    get :mudar_status, {cartao: @numero_cartao_maria, comando: 'pagar'}
    assert_response :ok

    #Volta o status antigo para continar testando
    resetar_comanda(@cartao_maria)

    get :mudar_status, {cartao: @numero_cartao_maria, comando: 'cancelar'}
    assert_response :ok
  end

  test 'Prepara uma JSON de tudo que deve ser pago para o programa Desktop -- WebServicePegarProduto' do
    #Conta a pagar

    #Sem nenhuma Comanda
    get :listar_compras, {cartao: @numero_cartao_maria}
    assert_response 404

    #Adicionando uma comanda
    comanda = Comanda.new cartao: @cartao_maria, valor: Configuracao.calcular_peso(1.5), peso: 1.5, status: 1
    comanda.save!

    get :listar_compras, {cartao: @numero_cartao_maria}
    assert_response :ok


    #Produtos A Pagar

    #Adicionando uma produtos a comanda
    produto_pago_1 = ProdutoPago.new comanda: comanda, produto: produtos(:coca), quantidade: 2
    produto_pago_1.save!
    produto_pago_2 = ProdutoPago.new comanda: comanda, produto: produtos(:pepsi), quantidade: 1
    produto_pago_2.save!

    get :listar_compras, {cartao: @numero_cartao_maria}
    assert_response :ok


    #Promocoes

    #Promocoes Padrao
    get :listar_compras, {cartao: @numero_cartao_maria}
    assert_response :ok

    #Adicionando uma promocao especial
    promocao = Promocao.new cliente_id: @cliente_victor.id, nome: 'teste', valor: '10'
    promocao.save!

    get :listar_compras, {cartao: @numero_cartao_maria}
    assert_response :ok

  end

  test 'Pesquisa um cliente pelo numero de cartao e retorna para o programa Desktop -- WebServiceProcurarCliente' do
    get :pesquisar_cliente, {numero_cartao: @cliente_victor.cartao.numero_cartao}
    assert_response 200

    get :pesquisar_cliente, {numero_cartao: '1111111115'}
    assert_response 200

    get :pesquisar_cliente, {numero_cartao: '9999999999'}
    assert_response 404

    get :pesquisar_cliente
    assert_response 500
  end

  test 'Trocar o cliente vinculado ao cartao -- WebServiceTrocarCartao' do
    get :trocar_cartao, {cartao_antigo: @cliente_victor.cartao.numero_cartao, cartao_novo: @numero_cartao_maria}
    assert_response 200

    get :trocar_cartao, {cartao_antigo: @numero_cartao_maria, cartao_novo: @cliente_ester.cartao.numero_cartao}
    assert_response 304

    get :trocar_cartao, {cartao_antigo: @numero_cartao_maria}
    assert_response 500

    get :trocar_cartao, {cartao_antigo: @cliente_victor.cartao.numero_cartao, cartao_novo: 'YEAh'}
    assert_response 404

    get :trocar_cartao, {cartao_antigo: 'Yeah', cartao_novo: @numero_cartao_maria}
    assert_response 404
  end

  test 'Verifica a existencia de um produto pelo codigo -- WebServiceVerificarCodigo' do
    get :verificar_codigo, {codigo: 00000001}
    assert_response :ok
    get :verificar_codigo, {codigo: 99999999}
    assert_response 417
  end

  test 'Logar operador pelo nome e senha para o programa Desktop' do
    get :logar_operador, {usuario: 'victor95pc', senha: '12345678'}
    assert_response :ok

    get :logar_operador, {usuario: 'YEAH!!', senha: '12345678'}
    assert_response 417

    get :logar_operador
    assert_response 417
  end

  private
  def pegar_comanda(cartao)
    comanda = Comanda.where(cartao: cartao).first
    if comanda.present?
      comanda.id
    else
      nil
    end
  end

  def resetar_comanda(cartao)
    comanda = Comanda.where(cartao: cartao).first
    if comanda.present?
      comanda.status = 1
      comanda.save!
    end
  end
end
