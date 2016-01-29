require("sinatra")

module App
	class Server < Sinatra::Base

		get("/") do
			erb :layout  #erb expects a symbol if you are refering to a file. 
		end

	end #class-Server
end #module-App