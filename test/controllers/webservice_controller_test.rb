require 'test_helper'

class WebserviceControllerTest < ActionController::TestCase
  setup do
    sign_in users(:victor)
    @cartao = cartoes(:cartao_maria)
    @cliente = clientes(:victor)
    @hex_cartao = @cartao.numero_cartao.to_s(16)
  end

  test 'mudar preco por kilo de comida -- MudarPrecoComandaGlobal' do
    get :mudar_preco, {valor_kg: 20.0}
    assert_response :ok
  end

  test 'Adicionar compra ao cartao -- WebService' do
    get :adicionar_compra, {cartao: @hex_cartao, codigos: [00000001, 00000002], quantidades: [1, 2], peso: 1.5}
    assert_response :ok
  end

  test 'Vincular cliente ao cartao -- WebServiceAdicionarCliente' do
    get :vincular_cliente, {cartao: @hex_cartao, nome: 'Maria', telefone: '71718585', cep: '23550371'}
    assert_response :ok
  end

  test 'Desvincular cliente -- WebServiceDesvincularCliente' do
    get :desvincular_cliente, {cartao: @hex_cartao}
    assert_response :ok
  end

  test 'Alterar dados da comanda -- WebServiceAlterarComanda' do
    get :alterar_comanda, {cartao: @hex_cartao, valor: 21.0}
    assert_response :ok
  end

  test 'Mudar Status da comanda -- WebServiceMudarStatus' do
    get :mudar_status, {cartao: @hex_cartao, comando: 'pagar'}
    assert_response :ok

    #Volta o status antigo para continar testando
    resetar_comanda(@cartao)

    get :mudar_status, {cartao: @hex_cartao, comando: 'cancelar'}
    assert_response :ok
  end

  test 'Prepara uma JSON das comandas a pagar para o programa Desktop -- WebServicePegarDados' do
    get :listar_comandas, {cartao: @hex_cartao}
    assert_response :ok
  end

  test 'Prepara uma JSON das promocoes especiais para um cliente para o programa Desktop -- WebServicePegarDesconto' do
    get :listar_promocoes_especiais, {id_cliente: @cliente.id}
    assert_response :ok
  end

  test 'Prepara uma JSON das promocoes padrao para todos os cliente para o programa Desktop -- WebServicePegarTodosDesconto' do
    get :listar_promocoes_padrao
    assert_response :ok
  end

  test 'Prepara uma JSON dos produtos pagos de uma comanda para o programa Desktop -- WebServicePegarProduto' do
    get :listar_produtos_pagos, {id_comanda: pegar_comanda(@cartao.id).id}
    assert_response :ok
  end

  test 'Prepara uma JSON de todos os produtos para o programa Desktop -- WebServicePegarTodosProduto' do
  end

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
  def pegar_comanda(id_cartao)
    Comanda.find id_cartao
  end

  def resetar_comanda(id_cartao)
    comanda = pegar_comanda(id_cartao)
    comanda.status = 1
  end
end
