class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :email
      	t.string :password_digest # bcrypt stores a digest not the password
      	t.timestamps null: false
    end
  end
end
