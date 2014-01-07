class CreateDespesas < ActiveRecord::Migration
  def change
    create_table :despesas do |t|
      t.string :nome
      t.text :descricao
      t.decimal :valor, precision: 10, scale: 2
      t.timestamps
    end
  end
end
