# Heroku Sinatra Quickstart Guide

# Create a gemfile. You can use `$ bundle init` or manually create a file named 'Gemfile'. It doesn't have an extension.
# Write ActiveRecord Migrations.
# Guides: 
#   - https://github.com/ga-students/wdi-persephone/blob/f9e0ce28c0cd8808844858142b7563fa22eeffd3/unit_b/w07/d05/classwork/200cupid/migrations.md
#   - http://edgeguides.rubyonrails.org/active_record_migrations.html

# Configure db for postgres

 require 'uri'

if ENV['RACK_ENV'] == "production"
  db = URI.parse(ENV['DATABASE_URL'])
  ActiveRecord::Base.establish_connection({
    :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
    :host     => db.host,
    :username => db.user,
    :password => db.password,
    :database => db.path[1..-1],
    :encoding => 'utf8'
  })
else
  # development db configuration (sqlite3) here
end

# Deploy to heroku
# Create a heroku app from your project directory
# `$ heroku create`
# Provision postgres
# https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-the-add-on
# `$ heroku addons | grep POSTGRES` to see if it's already provisioned.
# `$ heroku addons:create heroku-postgresql:hobby-dev` to provision
# Push to heroku
# `$ git push heroku master`
# Running commands in heroku console
# `$ heroku run [CONSOLE COMMAND HERE]
# Entering console in Heroku
# `$ heroku run bash`
# https://devcenter.heroku.com/articles/getting-started-with-rails4#console
# See server logs and errors
# `$ heroku logs`
# See heroku ENV variables
# `$ heroku config`
