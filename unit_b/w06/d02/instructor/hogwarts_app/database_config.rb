# this doesn't make a new mom
# Conversations::Mom.new

#  requires the sqlite3 gem
require 'sqlite3'
#  establishes a new database connection and assigns it to a global variable.
$db = SQLite3::Database.new('hogwarts.db')
#  configures the databse to return results as hashes
$db.results_as_hash = true
#
# [1, "Harry Potter", 1991]
#  configures the database to automatically do type conversion
# {id: "1", name: "Harry Potter", start_year: "1991"}

$db.type_translation = true
# {id: 1, name: "Harry Potter", start_year: 1991}
