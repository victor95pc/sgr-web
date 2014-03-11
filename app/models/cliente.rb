class Cliente < ActiveRecord::Base

  validates_presence_of :cartao_id
  validates_uniqueness_of :cartao_id
  validates_associated :cartao

  validates_presence_of :nome


  belongs_to :cartao
  has_many :promocoes

  def self.remover_vinculo(numero_cartao)
    cartao = Cartao.where(numero_cartao: numero_cartao).first
    cliente = cartao.cliente
    cliente.destroy if cliente.present?
  end

  def self.pesquisar(numero_cartao)
    cartao = Cartao.find_by_numero_cartao numero_cartao
    if cartao.present?
      self.find_by cartao: cartao
    else
      nil
    end
  end

  def self.trocar_cartao(nome, numero_cartao)
    cartao = Cartao.where(numero_cartao: numero_cartao).first
    cliente = self.where(nome: nome).first
    if cartao.present? and cliente.present?
      cliente.cartao = cartao
      cliente.save
    else
      return false
    end
  end
end
