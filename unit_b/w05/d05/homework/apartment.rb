require("pry")
class Apartment 
	attr_accessor :unit, :num_beds, :num_baths, :tenants
	def initialize(unit, num_beds, num_baths)
		@unit = unit
		@num_baths = num_baths.to_i
		@num_beds = num_beds.to_i
		@tenants = []
	end
	def price
		money = (@num_baths * 500) + (@num_beds * 1000)
		puts "$#{money}.00"
	end
	def is_it_a_studio_not_in_nyc_of_course?
		if @num_beds == 1
			puts true
		else 
			puts false
		end
	end
	def is_it_a_studio_like_shoebox_style?
		if @num_beds == 0
			puts true
		else 
			puts false
		end
	end
end
a1 = Apartment.new("A", 2, 2)
binding.pry