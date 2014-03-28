class ProdutoPago < ActiveRecord::Base
  validates_associated :comanda
  validates_associated :produto

  validates_presence_of :quantidade
  validates_presence_of :produto
  validates_presence_of :comanda

  belongs_to :produto
  belongs_to :comanda

  def self.pegar_produtos(contas)
    procurar_produtos = ProdutoPago.select(:quantidade, :produto_id).includes(:produto).where comanda_id: contas
    produtos = Array.new
    procurar_produtos.each { |produto_pago| produtos << (produto_pago.attributes.merge produto_pago.produto.attributes) }
    produtos
  end
end
