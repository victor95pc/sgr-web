class CreateProdutoPagos < ActiveRecord::Migration
  def change
    create_table :produto_pagos do |t|
      t.integer :produto_id
      t.integer :comanda_id
      t.integer :quantidade
      t.timestamps
    end
  end
end
