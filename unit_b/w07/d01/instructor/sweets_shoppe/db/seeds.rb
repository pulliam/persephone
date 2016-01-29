require_relative "config"

#  name VARCHAR(255),
  # price INTEGER,
  # flavor VARCHAR(255),
  # calories INTEGER,
  # gluten_free INTEGER,
  # img_url TEXT

sweets = [
  ["donut", 3, "coconut", 550, 0, "http://www.tablefortwoblog.com/wp-content/uploads/2014/01/triple-coconut-donuts-tablefortwoblog-4.jpg"],
  ["cupcake", 4, "lavender", 425, 0, "http://jessienextdoor.com/wp-content/uploads/2012/03/lavender1.jpg"],
  ["eclair", 2, "chocolate", 350, 1, "http://www.foodnculture.com/wp-content/uploads/2014/06/chocolate-eclair-376.jpg"],
  ["doggy treat", 1, "peanut butter", 100, 0, "http://media4.giphy.com/media/d3IB6LcqZA8ko/giphy.gif"]
]

sql = "INSERT INTO sweets (name, price, flavor, calories, gluten_free, img_url) VALUES (?,?,?,?,?,?)"

sweets.each do |sweet_values|
  $db.execute(sql, sweet_values)
end







