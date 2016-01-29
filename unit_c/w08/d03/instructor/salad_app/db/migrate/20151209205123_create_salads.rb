class CreateSalads < ActiveRecord::Migration
  def change
    create_table :salads do |t|
      t.string :leafy_green
    end
  end
end
