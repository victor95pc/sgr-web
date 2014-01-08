require 'test_helper'

class ProdutoTest < ActiveSupport::TestCase
  test 'Adicionando produto' do
    produto = Produto.new numero_codigo: 4, nome: 'GuaraCamp', valor: 2.00, descricao: 'Coca Light'
    assert produto.save

    produto.numero_codigo = nil
    assert_not produto.save

    produto.nome = nil
    assert_not produto.save

    produto.valor = nil
    assert_not produto.save
  end
end
