ENV["RAILS_ENV"] ||= "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'pry'
require 'better_errors'
require 'meta_request'

class ActiveSupport::TestCase
  ActiveRecord::Migration.check_pending!

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def required(model, *fields)
    validate(model, *fields) { assert_not model.save }
  end

  def not_required(model, *fields)
    validate(model, *fields) { assert model.save }
  end

  def validate_palom_grid(url, columns_require, columns_not_require, data)
    opers = ['add', 'edit']

    #REQUIRED TEST
    opers.each do |oper|
      test_columns = get_id(data)
      validate_opers(oper, url, test_columns, columns_require, data) do |columns, column|

        if column != columns.last
          assert_response :internal_server_error, "REQUIRE Column: #{column} Operation: #{oper}, expect a error inside grid"
        else
          assert_response :ok, "REQUIRE Column: #{column} Operation: #{oper}, expect a ok inside grid"
        end
      end
    end

    #DELETE TEST
    test_columns = get_id(data)
    get url, test_columns.merge({oper: 'del'})
    assert_response :ok, 'Operation: del, expect a ok inside grid'


    #LOAD REQUIRED IF EXIST SOME
    test_columns = get_id(data)

    columns_require.each do |column|
      test_columns[column] = data[column]
    end

    #NOT REQUIRED TEST
    opers.each do |oper|
      validate_opers(oper, url, test_columns, columns_not_require, data) do |columns, column|
        assert_response :ok, "NOT REQUIRE Column: #{column} Operation: #{oper}, expect a ok inside grid"
        case oper
          when 'add'
            #DELETE AND CONTINUE TESTING
            binding.pry
            if column != columns.last
              get url, test_columns.merge({oper: 'del'})
              assert_response :ok, 'Operation: del, expect a ok inside grid'
            end
        end
      end
    end
  end

  def validate(model, *fields)
    fields.each do |field|
      model[field] = nil
      fields.each do |field|
        model[field] = 123 unless model[field] == nil
        yield
      end

    end
  end

  def validate_opers(oper, url, test_columns, columns, data)
    columns.each do |column|
      test_columns[column] = data[column]
      get url, test_columns.merge({oper: oper})
      yield columns, column if block_given?
    end
  end

  def get_id(data)
    test_columns = Hash.new
    test_columns.merge({id: data[:id]})
  end
end