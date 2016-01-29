class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
    	t.string :name
    	t.string :city
    	t.string :state
    	t.boolean :is_family_friendly, default: false

    	t.timestamps null: false
    end
  end
end
