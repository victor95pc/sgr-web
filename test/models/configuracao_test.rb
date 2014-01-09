#encoding: utf-8
require 'test_helper'

class ConfiguracaoTest < ActiveSupport::TestCase
  test 'Mudar valor da configuração' do
    configuracao = Configuracao.first

    exijir_presenca configuracao, :valor_kg

    configuracao.valor_kg = 20.10
    assert configuracao.save
  end
end
