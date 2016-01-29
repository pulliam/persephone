require("pry")
require("sqlite3")
#this will make a new connection to this database: 
#then to complete that, I need to put both roots and schema inside this new "database_ruby_exercise" by doing the .db < .sql

$db = SQLite3::Database.new("database_ruby_exercise.db")
#I could also use an existing one which is faster! cause makes the connection only!
#$db = SQLite3::Database.new("goldengirls.db")
# $db.results_as_hash = true
# $db.type_translation = true

asked_id = ARGV[1].to_i
name = ARGV[1]
glasses = ARGV[2].to_i
favs = ARGV[3]

all_values = $db.execute("SELECT * FROM girls")
one_value = $db.execute("SELECT * FROM girls WHERE id= #{asked_id}")

if ARGV[0] == 'read_all'
	print all_values
elsif ARGV[0] == 'read_one'
	print one_value
elsif ARGV[0] == 'create'
	$db.execute("INSERT INTO girls (name, wears_glasses, favorite_thing) VALUES('#{name}', '#{glasses}', '#{favs}')")
	puts "Success!"
end


#Write a program in ruby that:

# 1)
# When the user types in:
# $ ruby talk_to_db.rb read_all
# Print the contents of the database to the terminal 

# 2)
# When the user types in:
# $ ruby talk_to_db.rb read_one 1
# print out the record with the matching ID!

# 3)
# When the user types in:
# $ ruby talk_to_db.rb create "Anna" 0 "Sheepdogs" "Mean People"
# Add a new record to my database AND Displays "Added succesfully" if it did.


# $db.execute("INSERT INTO girls(name, wears_glasses, favorite_thing) VALUES ('thais', 0, 'chocolates')")