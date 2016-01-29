class CreateParties < ActiveRecord::Migration
  def change
    create_table :parties do |t|
      t.string :name
      t.integer :pounds_of_meat
      t.integer :miles_traveled

      t.timestamps null: false
    end
  end
end
