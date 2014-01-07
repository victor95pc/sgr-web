class CreateComandas < ActiveRecord::Migration
  def change
    create_table :comandas do |t|
      t.integer :cartao_id
      t.decimal :peso, precision: 10, scale: 2
      t.decimal :valor, precision: 10, scale: 2
      t.integer :status
      t.timestamps
    end
  end
end
