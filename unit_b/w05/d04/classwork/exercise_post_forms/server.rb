module App
	class Server < Sinatra::Base

	$all_data = {
		:entries =>[]
		}

	get('/') do
		redirect to("/guestbook")
	end # / GET

	get('/guestbook') do
		@data = $all_data
		erb :guestbook
	end #guestbook GET

	get('/new_entry') do
		erb :new_entry
	end #new_entry GET

	post('/stats_of_guest') do
		entry = {
			message: params[:message] 
			email:
			name:
		}

		$all_data.push(entry)
		redirect to("/")
	end

	end #server
end #App module
