class Promocao < ActiveRecord::Base
  validates_presence_of :nome
  validates_presence_of :valor
  validates_associated :cliente

  belongs_to :cliente

  def self.promocoes(id_cliente)
    promocoes_especias(id_cliente) + promocoes_padrao
  end

  def self.promocoes_especias(id_cliente)
    Promocao.where cliente_id: id_cliente
  end

  def self.promocoes_padrao
    Promocao.where cliente_id: nil
  end
end
