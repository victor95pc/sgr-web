#encoding: utf-8
require 'test_helper'

class PromocaoTest < ActiveSupport::TestCase
  test 'Adicionando promoção' do
    promocao = Promocao.new nome: 'Grande Promoção', valor: 15.00, descricao: 'Dia Show'
    promocao.cliente = clientes(:victor)
    assert promocao.save

    required promocao, :nome, :valor, :descricao

  end
end
