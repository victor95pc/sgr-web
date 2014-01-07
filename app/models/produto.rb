class Produto < ActiveRecord::Base
  has_many :produto_pagos
end
