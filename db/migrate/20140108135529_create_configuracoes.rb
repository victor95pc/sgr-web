class CreateConfiguracoes < ActiveRecord::Migration
  def change
    create_table :configuracoes do |t|
      t.decimal :valor_kg, precision: 10, scale: 2
      t.timestamps
    end
  end
end
