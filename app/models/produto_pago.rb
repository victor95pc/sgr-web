class ProdutoPago < ActiveRecord::Base
  belongs_to :produto
  belongs_to :comanda
end
