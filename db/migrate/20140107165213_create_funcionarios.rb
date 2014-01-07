class CreateFuncionarios < ActiveRecord::Migration
  def change
    create_table :funcionarios do |t|
      t.string :nome
      t.string :cargo
      t.decimal :salario, precision: 10, scale: 2
      t.timestamps
    end
  end
end
