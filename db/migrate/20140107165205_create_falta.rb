class CreateFalta < ActiveRecord::Migration
  def change
    create_table :falta do |t|
      t.integer :funcionario_id
      t.datetime :data_falta
      t.text :motivo
      t.timestamps
    end
  end
end
