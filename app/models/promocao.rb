class Promocao < ActiveRecord::Base
  validates_presence_of :nome
  validates_presence_of :valor

  belongs_to :cliente
end
