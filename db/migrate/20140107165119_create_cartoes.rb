class CreateCartoes < ActiveRecord::Migration
  def change
    create_table :cartoes do |t|
      t.string :numero_cartao
      t.timestamps
    end
  end
end
