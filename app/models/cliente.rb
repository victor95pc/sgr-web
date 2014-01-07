class Cliente < ActiveRecord::Base

  belongs_to :cartao
  has_many :promocoes
end
