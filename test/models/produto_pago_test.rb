require 'test_helper'

class ProdutoPagoTest < ActiveSupport::TestCase
  test 'Adicionando produtos pagos' do
    produto_pago = ProdutoPago.new quantidade: 1
    produto_pago.produto = produtos(:coca)
    produto_pago.comanda = comandas(:comanda_victor)

    assert produto_pago.save

    produto_pago.produto = nil
    assert_not produto_pago.save

    produto_pago.quantidade = nil
    assert_not produto_pago.save

    produto_pago.comanda = nil
    assert_not produto_pago.save
  end
end
