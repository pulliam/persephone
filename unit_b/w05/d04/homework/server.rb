require_relative("donuts")
module App
	$original_list = Donuts::MENU 

	class Server < Sinatra::Base

		get('/') do
			@donuts = Donuts::MENU
			erb :index
		end #get `/`

		get('/donuts/:id') do
			@donut = Donuts::MENU.find{ |this| this[:id] == params[:id].to_i }
			erb :donuts
		end #get 'donuts/:id'

		post('/donuts') do
			@id = $original_list.length
			@flavor = params[:flavor].to_s
			@price = params[:price].to_s
			@newdonut = {
				id: @id + 1,
				flavor: @flavor,
				price: @price
			}
			$original_list.push(@newdonut)
			erb :test

			if params[:redirect] == "here"
				redirect to ('/')
			else
				redirect to ("/donuts/#{@id.to_i + 1}")
			end #if statement
		end #get 'donuts/:id'

	end #server

end #app

