ENV["RAILS_ENV"] ||= "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  ActiveRecord::Migration.check_pending!

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def exijir_presenca(model, *campos)
    validar(model, *campos) { assert_not model.save }
  end

  def nao_exijir_presenca(model, *campos)
    validar(model, *campos) { assert model.save }
  end

  def validar(model, *campos)
    campos.each do |campo|
      model[campo] = nil
      campos.each do |campo|
        model[campo] = 123 unless model[campo] == nil
        yield
      end

    end
  end
end

