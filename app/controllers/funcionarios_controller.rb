class FuncionariosController < ApplicationController

  def cadastros

  end

  def ajax_cadastros_grid
    cliente_cadastrados = palom_grid Funcionario, :nome, :cargo, :salario, :created_at
    render json: cliente_cadastrados
  end

end
