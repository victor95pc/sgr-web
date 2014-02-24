class Operador < ActiveRecord::Base
  validates_presence_of :funcionario_id, :usuario, :senha
  validates_length_of :senha, minimum: 8
  validates_associated :funcionario

  belongs_to :funcionario
end
