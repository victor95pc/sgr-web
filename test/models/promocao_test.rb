#encoding: utf-8
require 'test_helper'

class PromocaoTest < ActiveSupport::TestCase
  test 'Adicionando promoção' do
    promocao = Promocao.new nome: 'Grande Promoção', valor: 15.00, descricao: 'Dia Show'
    assert promocao.save

    promocao.cliente = clientes(:victor)
    assert promocao.save

    promocao.valor = nil
    assert_not promocao.save

    promocao.nome = nil
    assert_not promocao.save

  end
end
