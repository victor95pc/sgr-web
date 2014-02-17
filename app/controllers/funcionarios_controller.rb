class FuncionariosController < ApplicationController
  before_filter :authenticate_user!

  def cadastros

  end

  def ajax_cadastros_grid
    palom_grid Funcionario, {created_at: true}, :nome, :cargo, :salario
  end

end
