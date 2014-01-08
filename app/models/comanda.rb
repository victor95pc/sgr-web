class Comanda < ActiveRecord::Base

  validates_presence_of :cartao_id
  validates_presence_of :valor
  validates_presence_of :peso
  validates_presence_of :status

  validates_associated :cartao

  validates_numericality_of :status, less_than_or_equal_to: 3, greater_than_or_equal_to: 1

  belongs_to :cartao
  has_many :produto_pagos
end
