class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
    	t.string :name
    	t.string :content
    	t.integer :user_id
    	t.integer :category_id
    	t.datetime :time_created
    	t.string :gif, :default => "empty"
    end
  end
end
