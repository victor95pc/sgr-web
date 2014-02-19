class Configuracao < ActiveRecord::Base
  validates_presence_of :valor_kg
  validates_numericality_of :valor_kg
  validates_length_of :valor_kg, maximum: 9, minimum: 1

  def self.calcular_peso(peso)
    peso = peso.to_i
    if peso.is_a? Fixnum or peso.is_a? Float
      peso * self.first.valor_kg
    end
  end

  def self.mudar_preco_kg(preco)
    preco = preco.to_i
    if preco.is_a? Fixnum or preco.is_a? Float
      configuracao = self.first
      configuracao.valor_kg = preco
      configuracao.save!
    end
  end

  def self.preco_kg
    self.first.valor_kg
  end
end
