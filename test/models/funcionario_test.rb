require 'test_helper'

class FuncionarioTest < ActiveSupport::TestCase
  test 'Adicionar funcionario' do
    funcionario = Funcionario.new nome: 'Miguel Palomo', cargo: 'Dono do Mundo', salario: 1

    assert funcionario.save

    exijir_presenca funcionario, :nome, :cargo, :salario
  end
end
