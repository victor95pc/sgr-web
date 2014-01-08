#encoding: utf-8
require 'test_helper'

class ComandaTest < ActiveSupport::TestCase
  test 'Criação de comandas' do
    comanda = Comanda.new peso: 1.23, valor: 20.50, status: 1
    comanda.cartao = Cartao.find_by_numero_cartao 1111111111
    assert comanda.save

    comanda.peso = nil
    assert_not comanda.save

    comanda.valor = nil
    assert_not comanda.save

    comanda.status = nil
    assert_not comanda.save
  end

  test 'Mudar Status da comanda' do
    comanda = Comanda.new peso: 1.23, valor: 20.50, status: 1
    comanda.cartao = Cartao.find_by_numero_cartao 1111111111
    assert comanda.save

    comanda.status = 1
    assert comanda.save

    comanda.status = 2
    assert comanda.save

    comanda.status = 3
    assert comanda.save

    comanda.status = 4
    assert_not comanda.save

    comanda.status = -1
    assert_not comanda.save
  end
end
