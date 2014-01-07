class Cartao < ActiveRecord::Base

  has_one :cliente
  has_many :comandas
end
