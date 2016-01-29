require 'httparty'
require 'uri'
require 'json'
require 'pp'

base_uri = "http://api.nytimes.com/svc/search/v2/articlesearch"
format = ".json"
api_key = ENV["NYTIMES_ARTICLES_KEY"] #### <--- Use ENV Don't save your key to github
search_query = ARGV.join("+")

response = HTTParty.get("#{base_uri}#{format}?api-key=#{api_key}&q=#{search_query}&sort=newest&page=0")

response_body = JSON.parse(response.body)
articles = response_body["response"]["docs"]

# puts response_body
puts PP.pp(articles.first)
