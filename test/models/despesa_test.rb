#encoding: utf-8
require 'test_helper'

class DespesaTest < ActiveSupport::TestCase
  test 'Cadastro de despesa' do
    despesa = Despesa.new nome: 'Depesa Inicial', valor: 12, descricao: 'Mundo da Pratica'
    assert despesa.save

    not_required despesa, :descricao

    required despesa, :nome, :valor
  end
end
