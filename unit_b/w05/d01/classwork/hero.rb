require ("pry")

class Heroes
	attr_reader :damage, :attack, :evasion, :health
	attr_writer :health
	@@band = []

	def initialize(health=10, damage=10, attack=10, evasion=10)
		@health = health
		@damage = damage
		@attack = attack
		@evasion = evasion
	end

	def dead?
		if @health <= 0
			puts true 
		else
			puts false
		end		
	end

	def roll_dice
		$rolled = Random.rand(0..100)
	end

	def hit_percentage(monster)
		$percentage = (self.attack / monster.evasion) * 10
	end

	def defends(attacking_hero, hit_occured)
		if hit_occured 
			self.health -= attacking_hero.damage
		end
	end

	def attacks(enemy)
		if $rolled > $percentage
			puts 'Hero misses'
		elsif $rolled < $percentage
			puts 'Hero lands a Hit'
			enemy.health -= 10
		end
		print defends(self, true)
		true unless enemy.dead? == false
	end

	def register
		@@band.push(self) unless @@band.include?(self)
	end

	def self.all
		puts @@band
	end

end


tiny = Heroes.new(100, 100, 100, 100)
dancer = Heroes.new(200, 200, 200, 200)

binding.pry

