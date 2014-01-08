class Cliente < ActiveRecord::Base

  validates_presence_of :cartao_id
  validates_uniqueness_of :cartao_id
  validates_associated :cartao

  validates_presence_of :nome



  belongs_to :cartao
  has_many :promocoes
end
