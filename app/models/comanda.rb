class Comanda < ActiveRecord::Base

  belongs_to :cartao
  has_many :produto_pagos
end
