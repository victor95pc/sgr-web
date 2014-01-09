require 'test_helper'

class ProdutoTest < ActiveSupport::TestCase
  test 'Adicionando produto' do
    produto = Produto.new numero_codigo: 4, nome: 'GuaraCamp', valor: 2.00, descricao: 'Coca Light'
    assert produto.save

    exijir_presenca produto, :numero_codigo, :nome, :valor
  end
end
