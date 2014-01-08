require 'test_helper'

class FuncionarioTest < ActiveSupport::TestCase
  test 'Adicionar funcionario' do
    funcionario = Funcionario.new nome: 'Miguel Palomo', cargo: 'Dono do Mundo', salario: 1

    assert funcionario.save

    funcionario.nome = nil
    assert_not funcionario.save

    funcionario.cargo = nil
    assert_not funcionario.save

    funcionario.salario = nil
    assert_not funcionario.save
  end
end
