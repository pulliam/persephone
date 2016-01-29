require_relative 'db_config'

class Wizard < ActiveRecord::Base 
	has_and_belongs_to_many :spells

	def cast!
		@spell = self.spells.sample.name
		"#{self.name} casts #{@spell}"
	end

	def learn!
		@sample = Spell.all.sample
		if self.spells.include? @sample
			puts "nothing to learn today"
		else
			self.spells.push(@sample)
		end
	end

end

class Spell < ActiveRecord::Base
	has_and_belongs_to_many :wizards

	def deadly?
		if is_deadly
			puts "YEEEAH! you are dead"
		else 
			puts "Nope. Try Again"
		end
	end
end

class Reader < ActiveRecord::Base
	has_many :subscription
	has_many :periodicals, through: :subscriptions

	def reads?
		"#{Periodical.all.sample.name}"
	end
end

class Periodical < ActiveRecord::Base
	has_many :subscriptions
	has_many :readers, through: :subscriptions
end

class Subscription < ActiveRecord::Base
	belongs_to :reader
	belongs_to :periodical
end