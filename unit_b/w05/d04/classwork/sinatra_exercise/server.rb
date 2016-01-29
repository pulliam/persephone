module App
	class Server < Sinatra::Base
	
	get("/greet/sung") do
		erb :'greet/sung'
	end #get sung

	get("/greet/anna") do
		erb :'greet/anna'
	end #get anna

	get("/greet/taylor") do
		erb :'greet/taylor'
	end #get taylor

	#I CAN MAKE THIS A LOT DRYER!:
	#dynamic segment:
	# get("/greet/:name") do
	# 	@name = params[:name]    >> @ is a instance variable! It gets global for erb. Use it!
	# 	"hello #{name}"
	# end 
	# take a look at intructor file to see the other way of solving this!

	end #Server
end #App