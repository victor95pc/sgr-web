class Funcionario < ActiveRecord::Base
  validates_presence_of :nome
  validates_presence_of :cargo
  validates_presence_of :salario

  has_many :faltas
  has_one :operador
end
