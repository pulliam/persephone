class CreateBands < ActiveRecord::Migration
  def change
    create_table :bands do |t|
      t.string :name
      t.string :has_explicit_lyrics

      t.timestamps null: false
    end
  end
end
