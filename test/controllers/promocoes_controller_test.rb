#encoding: utf-8
require 'test_helper'

class PromocoesControllerTest < ActionController::TestCase
  setup do
    sign_in users(:victor)
    @promocao_especial_grid = {id: 2, cliente: 'Victor Palomo de Castro', nome: 'Dia do Victor', valor: 50.0, descricao: 'Meu DIA!!'}
    @promocao_padrao_grid = {id: 3, nome: 'Dia de Todos', valor: 1000.0, descricao: 'Porque o dia é de todos nos'}
  end

  test 'get promocoes especiais' do
    get :promocoes_especiais
    assert_response :success
  end

  test 'get promocoes padrao' do
    get :promocoes_padrao
    assert_response :success
  end

  test 'testar grid promocoes especiais' do
    validate_palom_grid :ajax_promocoes_especiais_grid, [:cliente, :nome, :valor], [:descricao], @promocao_especial_grid
  end

  test 'testar grid promocoes padrao' do
    validate_palom_grid :ajax_promocoes_padrao_grid, [:nome, :valor], [:descricao], @promocao_padrao_grid
  end
end
