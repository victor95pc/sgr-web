class Promocao < ActiveRecord::Base
  validates_presence_of :nome
  validates_presence_of :valor
  validates_associated :cliente

  belongs_to :cliente
end
