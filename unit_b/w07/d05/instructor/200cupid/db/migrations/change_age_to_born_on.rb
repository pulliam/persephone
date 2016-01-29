require_relative "../config"

class ChangeAgeToBornOn < ActiveRecord::Migration
  def up
    remove_column(:users, :age)
    add_column(:users, :born_on, :date)
  end

  def down
    remove_column(:users, :born_on)
    add_column(:users, :age, :integer)
  end
end

ChangeAgeToBornOn.migrate(ARGV[0])
