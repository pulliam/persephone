require ("pry")
class Tenant 
	attr_accessor :f_name, :l_name, :born_on, :gender, :nickname, :occupation, :full_name
	def initialize(f_name, l_name, born_on, gender)
		@f_name = f_name
		@l_name = l_name
		@born_on = born_on
		@gender = gender
		@nickname = ""
		@occupation = "" 
	end
	def full_name
		if @nickname.empty?
		puts "#{@f_name} #{@l_name}" 
		else
		puts "#{@f_name} '#{@nickname}' #{@l_name}" 
		end
	end
end

p1 = Tenant.new("Thais", "Pulliam", "August 04th, 1993", "Female")
p1.nickname = "Tha"
p1.occupation = "Junior Developer"
binding.pry