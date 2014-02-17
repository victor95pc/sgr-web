require 'test_helper'

class ClientesControllerTest < ActionController::TestCase
  setup do
    sign_in users(:victor)
    @cliente_grid = {id: 4, nome: 'Miguel Palomo de Castro', numero_cartao: '1111111115', telefone: '74952926', cep: '23550360'}
  end

  test 'get cadastros' do
    get :cadastros
    assert_response :success
  end

  test 'testar grid cadastros' do
    validate_palom_grid :ajax_cadastros_grid, [:nome, :numero_cartao], [:telefone, :cep], @cliente_grid
  end
end
