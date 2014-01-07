class CreateProdutos < ActiveRecord::Migration
  def change
    create_table :produtos do |t|
      t.integer :numero_codigo
      t.string :nome
      t.decimal :valor, precision: 10, scale: 2
      t.text :descricao
      t.timestamps
    end
  end
end
