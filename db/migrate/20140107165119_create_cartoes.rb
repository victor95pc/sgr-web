class CreateCartoes < ActiveRecord::Migration
  def change
    create_table :cartoes do |t|
      t.integer :numero_cartao
      t.timestamps
    end
  end
end
