class Configuracao < ActiveRecord::Base
  validates_presence_of :valor_kg

  def self.calcular_peso(peso)
    peso * Configuracao.first.valor_kg
  end
end
