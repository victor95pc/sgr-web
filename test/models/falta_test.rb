#encoding: utf-8
require 'test_helper'

class FaltaTest < ActiveSupport::TestCase
  test 'Adicionar falta' do
    falta = Falta.new motivo: 'O mundo não estava pronto', data_falta: Time.now
    falta.funcionario = Funcionario.find_by_nome 'Victor Palomo'

    assert falta.save

    falta.motivo = nil
    assert falta.save

    falta.data_falta = nil
    assert_not falta.save
  end
end
