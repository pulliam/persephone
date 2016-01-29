# Require!!!
require "sqlite3"

#  Sets up a new connection to my DB
$deebs = SQLite3::Database.new("goldengirls.db")
#  Configuration!!!!!
$deebs.results_as_hash = true

command = ARGV[0]

if command == "read_all"
  # READ everything from my DB
  results = $deebs.execute("SELECT * FROM girls")
  # Show it to the user
  puts results
#  FInd by ID
elsif command == "read_one"
  id = ARGV[1]
  results = $deebs.execute("SELECT * FROM girls WHERE id=#{id}")
  puts results
elsif command == "create"
  name = ARGV[1]
  wears_glasses = ARGV[2].to_i
  fave = ARGV[3]
  hates = ARGV[4]
  $deebs.execute("INSERT INTO girls (name, wears_glasses, fave_thing, least_fave_thing) VALUES ('#{name}', #{wears_glasses}, '#{fave}', '#{hates}')")
  puts "Success!!"
end

# Step 1

# When the user types in
# $ ruby talk_to_db.rb read_all
# Print out the contents of your database to the terminal screen

# Step 2

#  When the user types in 
# $ ruby talk_to_db.rb read_one 1
# print out the record with the matching ID!

# Step 3

# When the user types in 
# $ ruby talk_to_db.rb create "Anna" 0 "Shetland Sheepdogs" "Mean people."
# Add a new record to my database AND DISPLAYS IT!! :D

# 






