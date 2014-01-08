class Falta < ActiveRecord::Base
  validates_associated :funcionario
  validates_date :data_falta

  belongs_to :funcionario
end
