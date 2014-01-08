#encoding: utf-8
require 'test_helper'

class DespesaTest < ActiveSupport::TestCase
  test 'Cadastro de despesa' do
    despesa = Despesa.new nome: 'Depesa Inicial', valor: 12, descricao: 'Mundo da Pratica'
    assert despesa.save

    despesa.descricao = nil
    assert despesa.save

    despesa.nome = nil
    assert_not despesa.save

    despesa.valor = nil
    assert_not despesa.save

    despesa.nome = 1234
    assert_not despesa.save
  end
end
