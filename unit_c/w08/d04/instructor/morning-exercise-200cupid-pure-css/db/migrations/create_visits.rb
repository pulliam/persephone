class CreateVisits < ActiveRecord::Migration

  def up
    create_table :visits do |t|
      t.integer :visited_id
      t.integer :visitor_id
      t.datetime :created_at
    end
  end

  def down
    drop_table :visits
  end
end
