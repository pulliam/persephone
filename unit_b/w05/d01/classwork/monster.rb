#Create a Monster class that have the same attributes as the hero inside of a new monster.rb file.

class Moster
	attr_reader :damage, :attack, :evasion
	attr_writer :health

	@@horde = []

	def initialize(health=10, damage=0, attack=0, evasion=0)
		@health = health
		@damage = damage
		@attack = attack
		@evasion = evasion
	end

		def dead?
		puts true unless @health is <= 0
	end

	def roll_dice
		Random.rand(0..100)
	end

	def hit_percentage(hero)
		(self.@attack / hero.@evasion) * 10
	end

	def attacks(heroes)
		if roll_dice > hit_percentage
			puts 'Hero misses'
		elsif roll_dice < hit_percentage
			puts 'Hero lands a Hit'
			heroes.@health -= hit_percentage
		end
		defends
		true unless heroes.dead? == false
	end

	def defends(attacking_monster, hit_occured)
		if hit_occured 
			self.@health -= attacking_monster.damage
		end
	end

	def register
		@@horde.push(self) unless @@horde.include?(self)
	end

	def self.all
		puts @@horde
	end

end