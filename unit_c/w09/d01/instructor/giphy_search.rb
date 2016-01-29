require 'httparty'
require 'json'
require 'uri'

search_query =  URI.escape(ARGV.join("+"))
api_key = ENV["GIPHY_PUBLIC_KEY"]

response = HTTParty.get("http://api.giphy.com/v1/gifs/search?limit=1&q=#{search_query}&api_key=#{api_key}")

puts JSON.pretty_generate(JSON.parse(response.body))
