class CreateBandsGenresJoinTable < ActiveRecord::Migration
  def change
    create_table :bands_genres, id: false do |t|
      t.integer :band_id
      t.integer :genre_id
    end
  end
end
