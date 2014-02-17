require 'test_helper'

class FuncionariosControllerTest < ActionController::TestCase
  setup do
    sign_in users(:victor)
    @funcionario_grid = {id: 2, nome: 'Victor Palomo de Castro', cargo: 'Dono do Mundo Socialista', salario: 0}
  end

  test 'get cadastros' do
    get :cadastros
    assert_response :success
  end

  test 'testar grid cadastros' do
    validate_palom_grid :ajax_cadastros_grid, [:nome, :cargo, :salario], [], @funcionario_grid
  end
end
