class CreateLandmarks < ActiveRecord::Migration
  def change
    create_table :landmarks do |t|
      t.string :name
      t.integer :mile_marker

      t.timestamps null: false
    end
  end
end
