# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


landmark_names = ["Independence, Missouri", "Courthouse and Jailhouse Rock", "Chimney Rock", "Fort Laramie", "Independence Rock", "Fort Bridger", "Soda Springs", "Fort Hall", "Fort Boise", "Whitman Mission", "The Dalles", "Oregon City"]

landmark_names.each_with_index do |loc, index|
  Landmark.create({name: loc, mile_marker: index * 250})
end

party_1 = Party.create({
  name: "Watson",  
  miles_traveled: 0, 
})

party_2 = Party.create({
  name: "Arthur", 
  miles_traveled: 0
})

party_3 = Party.create({
  name: "Lamplugh", 
  miles_traveled: 0
})

party_1.wagon = Wagon.create({
  speed: 1, 
  max_capacity: 4, 
  num_oxen: 2,
  pounds_of_meat: 30
})
party_2.wagon = Wagon.create({
  speed: 1, 
  max_capacity: 4, 
  num_oxen: 2,
  pounds_of_meat: 30
})
party_3.wagon = Wagon.create({
  speed: 1, 
  max_capacity: 4, 
  num_oxen: 2,
  pounds_of_meat: 30
})

party_1.landmark = Landmark.first
party_2.landmark = Landmark.first
party_3.landmark = Landmark.first

party_1.save
party_2.save
party_3.save

party_1.travelers.create(name: "Bill", health: 4, weight: 170)
party_1.travelers.create(name: "Ted", health: 9, weight: 210)

party_2.travelers.create(name: "Bea", health: 5, weight: 150)

party_3.travelers.create(name: "Squid", health: 2, weight: 110)
party_3.travelers.create(name: "Flounder", health: 2, weight: 90)
party_3.travelers.create(name: "Eel", health: 3, weight: 165)
