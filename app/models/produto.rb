class Produto < ActiveRecord::Base
  validates_presence_of :numero_codigo
  validates_presence_of :nome
  validates_presence_of :valor

  has_many :produto_pagos
end
