# This loads up the database configuration which requires the gem
# and establishes the db connection
require_relative 'config.rb'

# Creates a new instance of a clown in memory
c1 = Clown.new({name: "Pennywhistle", nose_color: "red", shoe_size: 13})
# Persists the clown to the database
c1.save

# Creates a new clown in memory and saves it to the database
c2 = Clown.create({name: "Bozo", nose_color: "red", shoe_size: 13})

car = Car.create({name: "Fiat 500"})

# This treats our association as an array
# It assigns the clown's car_id to car.id
car.clowns.push(c1)

# Find all the clowns with a card id matching car.id
car.clowns
