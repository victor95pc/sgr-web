require 'test_helper'

class WebserviceControllerTest < ActionController::TestCase
  setup do
    sign_in users(:victor)
    @cartao = cartoes(:cartao_maria)
    @cliente = clientes(:victor)
    @numero_cartao = @cartao.numero_cartao
  end

  test 'Mudar preco por kilo de comida -- MudarPrecoComandaGlobal' do
    get :mudar_preco, {valor_kg: 20.0}
    assert_response :ok
  end

  test 'Adicionar compra ao cartao -- WebService' do
    get :adicionar_comanda, {cartao: @numero_cartao.to_i.to_s(16), codigos: %w[00000001 00000002], quantidades: %w[1, 2], peso: 1.5}
    assert_response :ok
  end

  test 'Vincular cliente ao cartao -- WebServiceAdicionarCliente' do
    get :vincular_cliente, {cartao: @numero_cartao, nome: 'Maria', telefone: '71718585', cep: '23550371'}
    assert_response :ok
  end

  test 'Desvincular cliente -- WebServiceDesvincularCliente' do
    get :desvincular_cliente, {cartao: @numero_cartao}
    assert_response :ok
  end

  #test 'Alterar dados da comanda -- WebServiceAlterarComanda' do
  #  get :alterar_comanda, {cartao: @hex_cartao, valor: 21.0}
  #  assert_response :ok
  #end

  test 'Mudar Status da comanda -- WebServiceMudarStatus' do
    #Adicionando uma compra
    comanda = Comanda.new cartao: @cartao, valor: Configuracao.calcular_peso(1.5), peso: 1.5, status: 1
    comanda.save!

    get :mudar_status, {cartao: @numero_cartao, comando: 'pagar'}
    assert_response :ok

    #Volta o status antigo para continar testando
    resetar_comanda(@cartao)

    get :mudar_status, {cartao: @numero_cartao, comando: 'cancelar'}
    assert_response :ok
  end

  test 'Prepara uma JSON das comandas a pagar para o programa Desktop -- WebServicePegarDados' do
    #Sem nenhuma Comanda
    get :listar_comandas, {cartao: @numero_cartao}
    assert_response :internal_server_error

    #Adicionando uma comanda
    comanda = Comanda.new cartao: @cartao, valor: Configuracao.calcular_peso(1.5), peso: 1.5, status: 1
    comanda.save!

    get :listar_comandas, {cartao: @numero_cartao}
    assert_response :ok
  end

  test 'Prepara uma JSON das promocoes especiais para um cliente para o programa Desktop -- WebServicePegarDesconto' do
    #Sem nenhuma Promocao especiais
    get :listar_promocoes_especiais, {id_cliente: @cliente.id}
    assert_response :internal_server_error

    #Adicionando uma promocao especial
    promocao = Promocao.new cliente_id: @cliente.id, nome: 'teste', valor: '10'
    promocao.save!

    get :listar_promocoes_especiais, {id_cliente: @cliente.id}
    assert_response :ok
  end

  test 'Prepara uma JSON das promocoes padrao para todos os cliente para o programa Desktop -- WebServicePegarTodosDesconto' do
    get :listar_promocoes_padrao
    assert_response :ok
  end

  test 'Prepara uma JSON dos produtos pagos de uma comanda para o programa Desktop -- WebServicePegarProduto' do
    #Sem nenhuma comanda
    get :listar_produtos_pagos, {id_comanda: pegar_comanda(@cartao)}
    assert_response :internal_server_error

    #Adicionando uma comanda
    comanda = Comanda.new cartao: @cartao, valor: Configuracao.calcular_peso(1.5), peso: 1.5, status: 1
    comanda.save!

    #Sem nenhuma produtos na comanda
    get :listar_produtos_pagos, {id_comanda: pegar_comanda(@cartao)}
    assert_response :internal_server_error

    #Adicionando uma produtos a comanda
    produto_pago_1 = ProdutoPago.new comanda: comanda, produto: produtos(:coca), quantidade: 2
    produto_pago_1.save!
    produto_pago_2 = ProdutoPago.new comanda: comanda, produto: produtos(:pepsi), quantidade: 1
    produto_pago_2.save!

    get :listar_produtos_pagos, {id_comanda: pegar_comanda(@cartao)}
    assert_response :ok
  end

  #test 'Prepara uma JSON de todos os produtos para o programa Desktop -- WebServicePegarTodosProduto' do
  #end

  test 'Pesquisa um cliente pelo nome e retorna para o programa Desktop -- WebServiceProcurarCliente' do
    get :pesquisar_cliente, {nome: @cliente.nome}
    assert_response :ok
  end

  test 'Trocar o cliente vinculado ao cartao -- WebServiceTrocarCartao' do
    get :trocar_cartao, {nome: @cliente.nome, cartao: @cartao.numero_cartao}
    assert_response :ok
  end

  test 'Verifica a existencia de um produto pelo codigo -- WebServiceVerificarCodigo' do
    get :verificar_codigo, {codigo: 00000001}
    assert_response :ok
    get :verificar_codigo, {codigo: 99999999}
    assert_response :internal_server_error
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
