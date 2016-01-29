class CreateBarns < ActiveRecord::Migration
  def change
    create_table :barns do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
