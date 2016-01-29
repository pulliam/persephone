require ("pry")
class Car
	def initialize(on=false, fuel=0, color, make, model)
		@on = on
		@fuel = fuel
		@color = color
		@make = make
		@model = model
	end

	def on
		@on
	end

	def fuel
		@fuel
	end

	def color
		@color
	end

	def make
		@make
	end

	def model
		@model
	end

	def turn_on
		@on = !@on
	end

	def fuel_up
		@fuel += 5
	end

	#or
	#def fuel= (this_much)   //fuel= // notice that "=" needs to be part of the name on the setter method!
		#fuel += this_much
	#end

	def on=(is_on)
		@on = is_on
	end

	def fuel=(how_much)
		@fuel += this_much
	end

	def color= (new_color)
		@color = new_color
	end

	def make (new_make)
		@make = new_make
	end

	def model (new_model)
		@model = new_model
	end

end
binding.pry
