# visited_id INTEGER,
# visitor_id INTEGER,
# created_at DATETIME

class Visit < ActiveRecord::Base
  belongs_to :visitor, class_name: "User"
  belongs_to :visited, class_name: "User"
end
