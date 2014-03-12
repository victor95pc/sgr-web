class Cartao < ActiveRecord::Base
  validates_presence_of :numero_cartao
  validates_length_of :numero_cartao, is: 10
  validates_uniqueness_of :numero_cartao

  has_one :cliente
  has_many :comandas

  def self.existe?(numero_cartao)
    Cartao.find_by_numero_cartao(numero_cartao).present?
  end
end
