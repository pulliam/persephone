# id INTEGER PRIMARY KEY,
# password_digest VARCHAR,
# name VARCHAR,
# born_on DATETIME,
# location VARCHAR,
# avatar_img_url VARCHAR

class User < ActiveRecord::Base

  has_secure_password

  has_many :visits, class_name: "Visit", foreign_key: "visited_id"

end
