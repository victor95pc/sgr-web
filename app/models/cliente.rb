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

  def self.pesquisar(cartao)
    cliente = existe? cartao
    if cliente.present?
      cliente['created_at'] = cliente['created_at'].strftime('%d/%m/%Y')
      ultima_compra = Comanda.ultima_compra(cartao)
      if ultima_compra.blank?
        cliente['ultima_compra'] = 'Primeira compra'
      else
        cliente['ultima_compra'] = ultima_compra.created_at.strftime('%d/%m/%Y')
      end
      cliente
    else
      nil
    end
  end

  def self.trocar_cartao(numero_cartao_antigo, numero_cartao_novo)
    cartao_antigo = Cartao.find_by numero_cartao: numero_cartao_antigo
    cliente = nil
    cliente = self.find_by cartao: cartao_antigo if cartao_antigo.present?
    cartao_novo = Cartao.find_by numero_cartao: numero_cartao_novo
    if cartao_novo.present? and cliente.present?
      if cartao_novo.cliente.blank?
        Comanda.where(cartao: cartao_antigo).update_all(cartao_id: cartao_novo)
        cliente.cartao = cartao_novo
        cliente.save
        'cliente cadastrado'
      else
        'cartao em uso'
      end
    else
      'cartao novo nao encotrado'
    end
  end

  def self.existe?(cartao)
    cliente = self.find_by(cartao: cartao)
    if cliente.present?
      cliente.attributes
    else
      nil
    end
  end
end
