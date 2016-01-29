class Robot 
	@@leader = "Doctor Sinistre"
	@@army = []
	attr_accessor :id, :health, :power, :location
	attr_reader :leader
	def register
		@@army.push(self) unless @@army.include?(self)
	end #register
	def initialize(id='000', health=10, power=10, location)
		register
		@id = id
		@health = health
		@power = power
		@location = location
		@leader = @@leader
		$power = power
	end #initialize
	def report_for_duty
		puts "Soldier #{@id} reporting for duty"
	end #report_for_duty
	def battle_cry
		puts "For #{@leader} - once more, unto the breach!"
	end #battle_cry
	def move(place)
		if self.power < 1
			puts "you are recyclable trash"
		else
			self.location = place
			self.power -= 1
		end
	end #move
	def fight
		if self.power < 1
			puts "you are recyclable trash"
		else
			self.power -= 1
		end
	end #fight
	def recharge
		self.power = $power
	end #recharge
end
$id_robot = 0
50.times do
	$id_robot += 1
	puts Robot.new($id_robot, 'Outer Space').report_for_duty
end