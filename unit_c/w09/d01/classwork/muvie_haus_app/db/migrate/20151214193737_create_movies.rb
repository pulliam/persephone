class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
    	t.string :title
    	t.string :runtime
    	t.string :rating
    	t.string :year
    	t.string :cast
    	t.string :img_url
    end
  end
end
