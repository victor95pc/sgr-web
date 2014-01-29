#encoding: utf-8
require 'test_helper'

class FaltaTest < ActiveSupport::TestCase
  test 'Adicionar falta' do
    falta = Falta.new motivo: 'O mundo não estava pronto', data_falta: Time.now
    falta.funcionario = Funcionario.find_by_nome 'Victor Palomo'

    assert falta.save

    required falta, :data_falta, :motivo
  end
end
