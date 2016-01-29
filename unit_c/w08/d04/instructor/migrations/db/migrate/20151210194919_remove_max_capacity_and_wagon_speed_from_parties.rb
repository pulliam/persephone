class RemoveMaxCapacityAndWagonSpeedFromParties < ActiveRecord::Migration
  def change
    remove_column :parties, :max_capacity, :integer
    remove_column :parties, :wagon_speed, :string
    remove_column :parties, :pounds_of_meat, :integer
    remove_column :parties, :num_oxen, :integer
  end
end
