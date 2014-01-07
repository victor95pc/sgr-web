class CreatePromocoes < ActiveRecord::Migration
  def change
    create_table :promocoes do |t|
      t.integer :cliente_id
      t.string :nome
      t.text :descricao
      t.decimal :valor, precision: 10, scale: 2
      t.timestamps
    end
  end
end
