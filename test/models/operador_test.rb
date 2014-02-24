require 'test_helper'

class OperadorTest < ActiveSupport::TestCase
  test 'Adicionando Operador' do
    operador = Operador.new usuario: 'victor95pc', senha: '12345678'
    assert_not operador.save

    operador = operadores(:victor)
    assert operador.save

    required operador, :usuario, :senha
  end
end
