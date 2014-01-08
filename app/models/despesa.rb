class Despesa < ActiveRecord::Base
  validates_presence_of :nome
  validates_presence_of :valor
end
