module App
	class Server
		get('/dog') do
		erb :index
		end
	end

	class Dog
		attr_accessor :breed, :color, :size
		def initialize(breed, color, size)
			@breed = breed
			@color = color
			@size = size
		end
	end #class

	chihuahua_crazy_colors = Dog.new('chihuahua', ['white', 'blue', 'pink'], 'small')
	bullDog = Dog.new('bullDog', ['brown', 'white'], 'big')
	pug = Dog.new('pug', ['black', 'white'], 'medium')

	dog_all = [chihuahua_crazy_colors, bullDog, pug]

end #module

