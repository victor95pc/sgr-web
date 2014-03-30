#encoding: utf-8
class Comanda < ActiveRecord::Base

  validates_presence_of :cartao_id
  validates_presence_of :valor
  validates_presence_of :peso
  validates_presence_of :status

  validates_associated :cartao

  validates_numericality_of :status, less_than_or_equal_to: 3, greater_than_or_equal_to: 1

  belongs_to :cartao
  has_many :produto_pagos

  def self.compras(numero_cartao)
    compras = Hash.new

    contas = comanda_a_pagar numero_cartao
    produtos = ProdutoPago.pegar_produtos(contas)

    compras[:contas] = contas if contas.present?

    if contas.present?
      promocoes = Promocao.promocoes compras[:contas].first.cartao.cliente
      descontos = Array.new

      promocoes.each do |desconto|
        desconto = desconto.attributes
        desconto['tipo'] = desconto['cliente_id'].nil? ? 'Padrão' : 'Especial'
        descontos << desconto
      end

      compras[:descontos] = descontos
      compras[:produtos] = produtos if produtos.present?
    end

    compras
  end

  def self.comanda_a_pagar(numero_cartao)
    cartao = Cartao.find_by numero_cartao: numero_cartao
    Comanda.where(cartao: cartao, status: 1) if cartao.present?
  end

  def self.ultima_compra(cartao)
    Comanda.order('created_at').find_by(cartao: cartao, status: 2)
  end
end
