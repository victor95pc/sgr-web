require 'test_helper'

class FuncionariosControllerTest < ActionController::TestCase
  setup do
    sign_in users(:victor)
    @funcionario_grid = {id: 2, nome: 'Victor Palomo de Castro', cargo: 'Dono do Mundo Socialista', salario: 0}
    @operador_grid = {id: 1, nome: 'Victor Palomo', usuario: 'victor95pc'}
  end

  test 'get cadastros' do
    get :cadastros
    assert_response :success
  end

  test 'get operadores' do
    get :operadores
    assert_response :success
  end

  test 'testar grid cadastros' do
    validate_palom_grid :ajax_cadastros_grid, [:nome, :cargo, :salario], [], @funcionario_grid
  end

  test 'testar grid operadores' do
    validate_palom_grid :ajax_operadores_grid, [:nome, :usuario], [], @operador_grid
  end
end
