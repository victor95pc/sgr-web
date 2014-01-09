class Falta < ActiveRecord::Base
  validates_associated :funcionario
  validates_date :data_falta

  validates_presence_of :motivo

  belongs_to :funcionario
end
