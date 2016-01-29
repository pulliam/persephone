class CreateWagons < ActiveRecord::Migration
  def change
    create_table :wagons do |t|
      t.integer :pounds_of_meat
      t.integer :speed
      t.integer :max_capacity
      t.integer :num_oxen

      t.references :party

      t.timestamps null: false
    end
  end
end