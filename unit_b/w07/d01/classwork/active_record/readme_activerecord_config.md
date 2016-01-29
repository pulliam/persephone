# ActiveRecord

## Configuration

```rb
# config.rb
require 'active_record'

# This will print out our SQL queries
ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "db/filename.sqlite3"
)
```

# Activity

Create a table in SQL for a clown class. Clowns should have a name, nose color, and shoe size.

Create a `clown.rb` file. Require the `config.rb` and create a `clown` class that inherits from `ActiveRecord::Base`
