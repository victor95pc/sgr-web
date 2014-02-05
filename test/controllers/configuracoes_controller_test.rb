require 'test_helper'

class ConfiguracoesControllerTest < ActionController::TestCase
  setup do
    @configuracao = {valor_kg: 50.20}
  end

  test 'get preco' do
    get :preco
    assert_response :success
  end

  test 'get sobre' do
    get :sobre
    assert_response :success
  end

  test 'get mudar preco' do
    get :mudar_preco, {configuracao: @configuracao}
    assert_response :success
  end
end
