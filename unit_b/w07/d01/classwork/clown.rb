require_relative("config.rb")

class Clown < ActiveRecord::Base
	has_many :appointments
  	has_many :patients, through: :appointments
end
 
class Appointment < ActiveRecord::Base
  	belongs_to :clown
  	belongs_to :patient
end