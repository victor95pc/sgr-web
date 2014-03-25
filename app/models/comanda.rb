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
    produtos = ProdutoPago.where comanda_id: contas

    compras[:contas] = contas unless contas.empty?

    if contas.present?
      descontos = Promocao.promocoes compras[:contas].first.cartao.cliente
      compras[:descontos] = descontos
      compras[:produtos] = produtos unless produtos.empty?
    end

    compras
  end

  def self.comanda_a_pagar(numero_cartao)
    cartao = Cartao.where(numero_cartao: numero_cartao).first
    Comanda.where(cartao: cartao, status: 1)
  end

  def self.ultima_compra(cartao)
    Comanda.order('created_at').find_by(cartao: cartao, status: 2)
  end
end
