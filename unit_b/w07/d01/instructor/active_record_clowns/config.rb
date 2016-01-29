# require the gem
require 'active_record'

# This will print out our SQL queries
ActiveRecord::Base.logger = Logger.new(STDERR)

# Setup the connection to the database
ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "clown_app.sqlite3"
)
