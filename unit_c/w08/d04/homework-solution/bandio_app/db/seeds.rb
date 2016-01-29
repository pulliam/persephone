# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Band.destroy_all
Venue.destroy_all
Event.destroy_all

v1 = Venue.create({name: "Stone Balloon",  city: "Newark",    state: "DE", is_family_friendly: true })
v2 = Venue.create({name: "T.T. the Bears", city: "Cambridge", state: "MA"})
v3 = Venue.create({name: "Paradise Rock Club", city: "Boston", state: "MA"})
v4 = Venue.create({name: "Theatre of Living Arts", city: "Philadelphia", state: "PA", is_family_friendly: true})
v5 = Venue.create({name: "The Echo", city: "Los Angeles", state: "CA"})

b1 = Band.create({name: "Tramps Like Us", has_explicit_lyrics: false})
b2 = Band.create({name: "KISS ALIVE!",    has_explicit_lyrics: true})
b3 = Band.create({name: "unSung Heroes",  has_explicit_lyrics: true})
b4 = Band.create({name: "Chris Johnson and the B Street Band", has_explicit_lyrics: false})

e1 = Event.create({performs_on: Date.parse("Dec 12, 2015"), band: b1, venue: v1})
e2 = Event.create({performs_on: Date.parse("Dec 13, 2015"), band: b1, venue: v2})
e2 = Event.create({performs_on: Date.parse("Dec 13, 2015"), band: b2, venue: v1})
e3 = Event.create({performs_on: Date.parse("Dec 14, 2015"), band: b3, venue: v1})

g1 = Genre.create({name: "Shoe Gaze" })
g2 = Genre.create({name: "K Pop"        })
g3 = Genre.create({name: "Tribute Band"})
g4 = Genre.create({name: "Grindcore"})
g5 = Genre.create({name: "Cosplay"})

b1.genres.push(g3, g4)
b2.genres.push(g3, g5)
b3.genres.push(g2, g4)
b4.genres.push(g3)
