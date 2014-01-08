#encoding: utf-8
require 'test_helper'

class ConfiguracaoTest < ActiveSupport::TestCase
  test 'Mudar valor da configuração' do
    configuracao = Configuracao.first

    configuracao.valor_kg = 20.10
    assert configuracao.save

    configuracao.valor_kg = nil
    assert_not configuracao.save
  end
end
