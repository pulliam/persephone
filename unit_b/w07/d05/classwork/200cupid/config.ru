require "pry"
require "sinatra"
require "bcrypt"

require_relative "db/config"
require_relative "server"
require 'dragonfly'

Dragonfly.app.configure do
  plugin :imagemagick
  fetch_url_whitelist [/publicdomainpictures/]
end

run Dragonfly.app
run App::Server
