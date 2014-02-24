class FuncionariosController < ApplicationController
  before_filter :authenticate_user!

  def cadastros
  end

  def operadores
  end

  def ajax_operadores_grid
    palom_grid Operador, {created_at: true}, :usuario do |oper, custons, operador|
      case oper
        when 'add'
          operador.senha = '12345678'
          operador.funcionario = Funcionario.find_by("nome LIKE '%#{params[:nome]}%'")
        when 'show'
          custons[:nome] = operador.funcionario.nome if operador.funcionario.present?
      end
    end
  end

  def ajax_cadastros_grid
    palom_grid Funcionario, {created_at: true}, :nome, :cargo, :salario
  end

end
