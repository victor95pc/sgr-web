require 'test_helper'

class ProdutoPagoTest < ActiveSupport::TestCase
  test 'Adicionando produtos pagos' do
    produto_pago = ProdutoPago.new quantidade: 1
    produto_pago.produto = produtos(:coca)
    produto_pago.comanda = comandas(:comanda_victor)

    assert produto_pago.save

    exijir_presenca produto_pago, :produto_id, :quantidade, :comanda_id
  end
end
