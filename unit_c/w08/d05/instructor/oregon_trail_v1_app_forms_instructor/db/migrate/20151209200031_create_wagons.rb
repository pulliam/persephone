class CreateWagons < ActiveRecord::Migration
  def change
    create_table :wagons do |t|
      t.integer :speed
      t.integer :max_weight
      t.integer :num_oxen
      t.references :party

      t.timestamps null: false
    end
  end
end
