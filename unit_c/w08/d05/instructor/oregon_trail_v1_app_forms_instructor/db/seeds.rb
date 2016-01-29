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