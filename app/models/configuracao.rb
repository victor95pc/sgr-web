class Configuracao < ActiveRecord::Base
  validates_presence_of :valor_kg

  def self.calcular_peso(peso)
    peso = peso.to_i
    if peso.is_a? Fixnum or peso.is_a? Float
      peso * Configuracao.first.valor_kg
    end
  end
end
