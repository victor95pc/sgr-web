#encoding: utf-8
require 'test_helper'

class ClienteTest < ActiveSupport::TestCase
  test 'Cadastro de cliente' do
    cliente = Cliente.new nome: 'Jose', telefone: 74952926, cep: 23550370
    cliente.cartao = cartoes(:cartao_jose)

    assert cliente.save

    nao_exijir_presenca cliente, :telefone, :cep

    exijir_presenca cliente, :nome, :cartao_id

    cliente = Cliente.new nome: 'Marcos', telefone: 33158647, cep: 23008350
    cliente.cartao = Cartao.find_by_numero_cartao 1111111111
    assert_not cliente.save
  end

  test 'Mudar nome do cliente' do
    cliente = Cliente.new nome: 'Jose', telefone: 74952926, cep: 23550370
    cliente.cartao = Cartao.find_by_numero_cartao 1111111111

    assert cliente.save

    cliente.nome = 'Victor'
    exijir_presenca cliente, :nome
  end
end
