class CreateOperadores < ActiveRecord::Migration
  def change
    create_table :operadores do |t|
      t.integer :funcionario_id
      t.string :usuario
      t.string :senha

      t.timestamps
    end
  end
end
