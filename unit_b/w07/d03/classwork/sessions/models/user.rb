class User < ActiveRecord::Base
  has_many :visits, class_name: "Visit", foreign_key: "visited_id" 
  has_many :visitors, through: :visits, class_name: "User"
end