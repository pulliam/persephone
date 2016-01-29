class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
    	t.date :performs_on
    	t.boolean :is_alcohol_served, default: true
    	t.integer :band_id
    	t.integer :venue_id

    	t.timestamps null: false
    end
  end
end
