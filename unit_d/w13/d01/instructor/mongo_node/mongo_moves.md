----- FIND -----

db.cheeses.find({
  $and: [
    {stink_level: {$gt: 4} },
    {stink_level: {$lt: 8} }
  ]
})

db.cheeses.find({
  $or: [
    {stink_level: 4 },
    {origin: "French" }
  ]
})

db.cheeses.find({
  stink_level: {$gt: 8}
})

db.cheeses.find({
  origin: {$in: ["American", "English"]}
})

db.cheeses.find({
  origin: {$ne: "French"}
})

db.cheeses.update({name: "Charolais"}, {$set:
  {flavor_notes: [ "creamy", "buttery"] }
})

//
db.cheeses.update({name: "Charolais"}, { $push: {
    flavor_notes: "sharp"
  }
})

// shift
db.cheeses.update({name: "Charolais"}, { $pop: {
    flavor_notes: -1
  }
})

// pop
db.cheeses.update({name: "Charolais"}, { $pop: {
    flavor_notes: 1
  }
})

// pull
db.cheeses.update({name: "Charolais"}, { $pull: {
    flavor_notes: "sharp"
  }
})
