#encoding: utf-8
require 'test_helper'

class CartaoTest < ActiveSupport::TestCase
  test 'Criação de cartões' do
    cartao = Cartao.new numero_cartao: 1234567899
    assert cartao.save

    required cartao, :numero_cartao

    cartao.numero_cartao = 12345678
    assert_not cartao.save

    cartao.numero_cartao = 1234567899999
    assert_not cartao.save

    cartao.numero_cartao = 'a'
    assert_not cartao.save

    cartao_diferente = Cartao.new numero_cartao: 1234567899
    assert_not cartao_diferente.save

  end
end
