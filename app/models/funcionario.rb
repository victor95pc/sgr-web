class Funcionario < ActiveRecord::Base
  has_many :faltas
end
