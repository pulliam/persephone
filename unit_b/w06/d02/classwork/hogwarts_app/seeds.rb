require_relative("database_config")

houses = [
  ['Gryffindor', 'http://www.hp-lexicon.org/images/icons/shield_01-5B1-5D.jpg'], #1
  ['Slytherin', 'http://www.hp-lexicon.org/images/icons/shield_sly.jpg'], #2
  ['Ravenclaw', 'http://www.hp-lexicon.org/images/icons/shield_rav.jpg'], #3
  ['Huffle Puff', 'http://www.hp-lexicon.org/images/icons/shield_huf.jpg'], #4
]

first_years = [
  ['Katie Bell', 1991, 1],
  ['Cho Chang', 1991, 3],
  ['Cedric Diggory', 1991, 4],
  ['Marietta Edgecombe', 1991, 3],
  ['Neville Longbottom', 1991, 1],
  ['Ernie Macmillan', 1991, 4],
  ['Pansy Parkinson', 1991, 2],
  ['Padma Patil', 1991, 3],
  ['Zacharias Smith', 1991, 4],
  ['Dean Thomas', 1991, 1],
  ['Ron Weasley', 1991, 1],
  ['Hermione Granger', 1991, 1],
]

sql = "INSERT OR REPLACE INTO students (name, start_year, house_id) VALUES(?, ?, ?)"
first_years.each do |student|
	$db.execute(sql, student)
end

sql_houses = "INSERT OR REPLACE INTO houses (name, image_url) VALUES(?, ?)"
houses.each do |house|
	$db.execute(sql_houses, house)
end

#SELECT FROM students WHERE house_id=1   (this finds all from gryffindor for ex.)

# sql = "INSERT INTO students (name, start_year, house_id) VALUES(?, ?, ?)"
# $db.execute(sql, ['Draco Malfoy', 1991, 'Slytherin'])
# $db.execute(sql, ['Ginny Weasley', 1992, 'Gryffindor'])
# $db.execute(sql, ['Luna Lovegood', 1992, 'Ravenclaw'])

# $db.execute("INSERT INTO students (name, start_year, house_id) VALUES('#{name}', #{start_year}, '#{house_id}')")
# $db.execute("INSERT INTO students (name, start_year, house_id) VALUES('Draco Malfoy', 1991, 'Slytherin')")
# $db.execute("INSERT INTO students (name, start_year, house_id) VALUES('Ginny Weasley', 1992, 'Gryffindor')")
# $db.execute("INSERT INTO students (name, start_year, house_id) VALUES('Luna Lovegood', 1992, 'Ravenclaw')")