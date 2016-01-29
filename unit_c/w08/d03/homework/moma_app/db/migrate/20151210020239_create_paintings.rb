class CreatePaintings < ActiveRecord::Migration
  def change
    create_table :paintings do |t|
    	t.string :title
    	t.string :medium
    	t.integer :artist_id

     	t.timestamps null: false
    end
  end
end
