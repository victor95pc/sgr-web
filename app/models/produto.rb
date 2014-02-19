class Produto < ActiveRecord::Base
  validates_presence_of :numero_codigo
  validates_presence_of :nome
  validates_presence_of :valor

  has_many :produto_pagos

  def self.procurar_produto(codigo_produto)
    Produto.where(numero_codigo: codigo_produto).first
  end
end
