class CreateClientes < ActiveRecord::Migration
  def change
    create_table :clientes do |t|
      t.string :nome
      t.integer :cartao_id
      t.integer :telefone
      t.integer :cep
      t.timestamps
    end
  end
end
