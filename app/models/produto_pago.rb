class ProdutoPago < ActiveRecord::Base
  validates_associated :comanda
  validates_associated :produto

  validates_presence_of :quantidade
  validates_presence_of :produto
  validates_presence_of :comanda

  belongs_to :produto
  belongs_to :comanda
end
