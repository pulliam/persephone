require_relative 'database_config'

houses = [
  ["Gryffindor", "gryffindor.jpg"],
  ["Ravenclaw", "ravenclaw.jpg"],
  ["Hufflepuff", "hufflepuff.jpg"],
  ["Slytherin", "slytherin.jpg"]
]

first_years = [
  ['Katie Bell', 1991, 1],
  ['Cho Chang', 1991, 2],
  ['Cedric Diggory', 1991, 3],
  ['Marietta Edgecombe', 1991, 2],
  ['Neville Longbottom', 1991, 1],
  ['Ernie Macmillan', 1991, 3],
  ['Pansy Parkinson', 1991, 4],
  ['Padma Patil', 1991, 2],
  ['Zacharias Smith', 1991, 3],
  ['Dean Thomas', 1991, 1],
  ['Ron Weasley', 1991, 1],
  ['Hermione Granger', 1991, 1]
]

houses.each do |house|
  $db.execute("INSERT INTO houses (name, image_url) VALUES (?, ?)", house)
end

first_years.each do |student|
  $db.execute("INSERT INTO students (name, start_year, house_id) VALUES (?, ?, ?)", student)
end
