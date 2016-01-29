require 'httparty'
require 'json'
require 'uri'
require 'pry'

# search_query =  URI.escape(ARGV.join("/"))
search_query1 = URI.escape(ARGV[0])
search_query2 = URI.escape(ARGV[1])
# subl ~/.bash_profile
# Add the key there like this---> export name_of_key=1111111111111111
# then run on terminal-----> source ~/.bash_profile 
# you can run ENV anytime on terminal to see all variables ----> env

api_key = ENV["wunderground_api_key"] 

response = HTTParty.get("http://api.wunderground.com/api/#{api_key}/conditions/q/#{search_query2}/#{search_query1}.json")
# puts JSON.pretty_generate -----> only if its JSON, not the "result"

puts JSON.parse(response.body)["current_observation"]["temp_f"]
	

# response.body["whatiwant"]["morespecifwhatIwant"]
# JSON.parse response.body    ------> This makes it more organized!