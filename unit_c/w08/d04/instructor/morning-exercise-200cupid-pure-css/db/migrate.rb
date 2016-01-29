require_relative 'config'
require_relative 'migrations/create_users'
require_relative 'migrations/create_visits'

direction = ARGV[0] || 'up'

# http://ruby-doc.org/core-2.2.0/Exception.html
begin
  CreateUsers.migrate(direction)
  CreateVisits.migrate(direction)
rescue => e
  puts e
end
