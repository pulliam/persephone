class AddWagonAndLocationInfoToParties < ActiveRecord::Migration
  def change
    # Let's add columns!
    # add_column :parties, :wagon_speed, :string

    change_table :parties do |t|
      t.string :wagon_speed
      t.integer :max_capacity
      t.integer :num_oxen
      t.references :landmark
    end
  end
end
