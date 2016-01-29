require 'pry'
require 'sinatra'

require_relative 'database_config'
require_relative 'server'

run App::Server
