require_relative("my_data/homework_data")

module App

	class Server < Sinatra::Base

		get("/tom") do
			@tom = HomeWork::Tom::TOM_CRUZ_ROLES
			erb :'tom/index', layout: true
		end #/tom get

		get("/tom/:key") do
			toms = HomeWork::Tom::TOM_CRUZ_ROLES
			input = params[:key]
			@tom = toms.find { |hash| hash[0] == input.to_sym }
			erb :'tom/show', layout: true
		end #/tom/:key get

		get("/pooh") do
			@pooh = HomeWork::Pooh::POOH
			erb :'pooh/pooh_index', layout: true
		end #/pooh get


		get("/instructors") do
			@instructors = HomeWork::INSTRUCTORS
			
			erb :'instructors/instructors_index', layout: true
		end #/instructors get

		get("/instructors/:each") do
			input = params[:each]
			teachers = HomeWork::INSTRUCTORS
			@teacher = teachers.find { |teach| teach[:name] == input }

			erb :'instructors/instructors_show', layout: true

		end #/pooh/:id get


	end #server-class
end #app-module