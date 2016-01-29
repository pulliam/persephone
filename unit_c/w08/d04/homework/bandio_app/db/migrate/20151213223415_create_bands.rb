class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
    	t.string :name
    	t.string :genre
    	t.boolean :has_explicit_lyrics, default: false

    	t.timestamps null: false
    end
  end
end
