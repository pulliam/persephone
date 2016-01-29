class CreateTravelers < ActiveRecord::Migration
  def change
    create_table :travelers do |t|
      t.string :name
      t.integer :health
      t.integer :weight
      t.references :party

      t.timestamps null: false
    end
  end
end
