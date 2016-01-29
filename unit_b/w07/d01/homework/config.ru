require 'sinatra'
require 'pry'
require_relative 'db_config'
require_relative 'models/fanny_pack'
require_relative 'app'

run App::Server
