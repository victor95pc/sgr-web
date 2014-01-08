class Cartao < ActiveRecord::Base
  validates_presence_of :numero_cartao
  validates_length_of :numero_cartao, is: 10
  validates_uniqueness_of :numero_cartao

  has_one :cliente
  has_many :comandas
end
