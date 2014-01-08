#encoding: utf-8
require 'test_helper'

class ClienteTest < ActiveSupport::TestCase
  test 'Cadastro de cliente' do
    cliente = Cliente.new nome: 'Jose', telefone: 74952926, cep: 23550370
    cliente.cartao = cartoes(:cartao_jose)

    assert cliente.save

    cliente.cep = nil
    assert cliente.save


    cliente.telefone = nil
    assert cliente.save

    cliente.cartao = nil
    assert_not cliente.save

    cliente.nome = nil
    assert_not cliente.save

    cliente.nome = 1234
    assert_not cliente.save

    cliente.cartao = nil
    assert_not cliente.save

    cliente = Cliente.new nome: 'Marcos', telefone: 33158647, cep: 23008350
    cliente.cartao = Cartao.find_by_numero_cartao 1111111111
    assert_not cliente.save
  end

  test 'Mudar nome do cliente' do
    cliente = Cliente.new nome: 'Jose', telefone: 74952926, cep: 23550370
    cliente.cartao = Cartao.find_by_numero_cartao 1111111111

    assert cliente.save

    cliente.nome = 'Victor'
    assert cliente.save

    cliente.nome = nil
    assert_not cliente.save
  end
end
