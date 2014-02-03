require 'test_helper'

class FinancasControllerTest < ActionController::TestCase
  setup do
    @financas_grid = {id: 1, cliente: 'Victor', peso: 1.5, valor: Configuracao.calcular_peso(1.5), status: 1}
  end

  test 'get pagamentos clientes' do
    get :pagamentos_clientes
    assert_response :success
  end

  test 'testar grid pagamentos cliente' do
    validate_palom_grid :ajax_pagamentos_clientes_grid, [:cliente, :valor, :peso, :status], [], @financas_grid
  end
end
