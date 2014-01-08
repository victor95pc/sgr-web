class Configuracao < ActiveRecord::Base
  validates_presence_of :valor_kg
end
