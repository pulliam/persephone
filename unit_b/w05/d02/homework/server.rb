require ("sinatra")
module App

$FORTUNES = [
  'If you refuse to accept anything but the best, you very often get it.',
  'Today it\'s up to you to create the peacefulness you long for.',
  'A smile is your passport into the hearts of others.',
  'A good way to keep healthy is to eat more Chinese food.',
  'Hard work pays off in the future, laziness pays off now.',
  'Change can hurt, but it leads a path to something better.',
  'Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.',
  'Your shoes will make you happy today.',
  'You already know the answer to the questions lingering inside your head.',
  'A short stranger will soon enter your life with blessings to share.',
  'Everyone agrees. You are the best.'
]

	class Server < Sinatra::Base
		def palindrome?(word)
			word = word.downcase
  			word == word.reverse
		end #def palindrome?

		get('/') do
			"<h1>Hello World!</h1>"
		end #get/

		get('/palindrome/:name') do
			if palindrome?(params["name"])
				"<h1>#{params['name']} is a palindrome!</h1>"
			else
				"<h1>#{params['name']} is <strong>not</strong> a palindrome!</h1>"
			end #if/else
		end #get/palindrome

		get('/calculator/:num1/:num2') do
			result = params["num1"].to_i + params["num2"].to_i
				"<h1>#{params['num1']} + #{params['num2']} = #{result}!</h1>"
		end #get/calculator

		get('/fortune') do
			your_fortune = $FORTUNES.sample
			"<p>#{your_fortune}!</p>"
				
		end #get/fortune
	end #server
end #module
