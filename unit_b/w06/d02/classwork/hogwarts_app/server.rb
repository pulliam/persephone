module App
	class Server < Sinatra::Base
		get("/") do 
			erb :index
		end

		get("/houses") do 
			sql = "SELECT * FROM houses"
			@houses = $db.execute(sql)
			erb :houses
		end

		get("/students") do 
			unless params[:name_new] == nil
				@house = $db.execute("SELECT * FROM houses WHERE id=#{params[:house_new]}")
			end
			sql = "SELECT name FROM students"
			@students = $db.execute(sql)
			erb :students
		end

		get("/house/:id") do 
			@id = params[:id]
			sql = "SELECT name FROM students WHERE house_id=#{params[:id]}"
			@students = $db.execute(sql)
			erb :students
		end

		post("/data") do 
			name = params[:name]
			year = params[:start_year]
			house = [1,2,3,4].sample
			sql = "INSERT INTO students (name, house_id, start_year) VALUES (?, ?, ?)"
			values = [name.to_s, house, year.to_i]
			$db.execute(sql, values)
			redirect to("/students?name_new=#{name}&house_new=#{house}")
		end

	end
end
