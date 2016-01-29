# Configure Gems for development or production 

1. Create a Gemfile
1. Add Gems to gemfile
1. Decide which gems are for production, development or both
1. Create gemfile groups and add any specific gems to them
1. Run bundle

```
# Gemfile
gem "sinatra"
gem "activerecord"
group :development do 
    gem "pry"
    gem "sqlite3"
end
group :production do 
  gem "pg"
end
```

Configure active record for development or production 

1. Ensure heroku has a postgres database add on
1. Tell active record which adapater to use based on the environment
1. Configure the adapater

```
# db/config.rb
require 'active_record'
if ENV['RACK_ENV'] == 'production'
  require 'uri'
  # parse the URL set up on heroku with
  # heroku addons:create heroku-postgresql:hobby-dev
  db = URI.parse(ENV['DATABASE_URL'])
  db_config = {
    :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
    :host     => db.host,
    :username => db.user,
    :password => db.password,
    :database => db.path[1..-1],
    :encoding => 'utf8'
  }
else
  db_config = {
    :adapter  => 'sqlite3',
    :database => 'db/database.sqlite3'
  }
end

# Configure ActiveRecord
ActiveRecord::Base.establish_connection(db_config)
```

# Use migrations to handle the schema

```
# db/migrations/create_tables.rb
class CreateTables < ActiveRecord::Migration
  def up 
    create_table :users do |t|
        t.string :name
    end
    create_table :pets do |t|
        t.string :name
        t.integer :user_id
    end
  end
  def down
    drop_table :users
    drop_table :pets
  end
end

CreateTables.migrate(ARGV[0])
```
