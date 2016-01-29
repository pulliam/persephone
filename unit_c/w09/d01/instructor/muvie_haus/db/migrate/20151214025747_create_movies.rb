class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :runtime
      t.string :rating
      t.string :actor_1
      t.string :actor_2
      t.integer :release_year
      t.string :img_url

      t.timestamps null: false
    end
  end
end
