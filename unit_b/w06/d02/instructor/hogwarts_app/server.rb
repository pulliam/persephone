module App
  class Server < Sinatra::Base

    get('/') do
      erb :index
    end

    get('/houses') do
      sql = "SELECT * FROM houses"
      @houses = $db.execute(sql)
      erb :houses
    end

    get('/houses/:id') do
      id = params[:id]
      sql = "SELECT * FROM students WHERE house_id = ?"
      # second arg has to be an array
      @students = $db.execute(sql, [id])
      erb :students
    end

    get('/register') do
      erb :register
    end

    post('/register') do
      # handle creating a student
      params[:name]
      params[:secret] # this comes from the hidden input
      sql = "INSERT INTO students (name, house_id) VALUES (?, ?)"
      house_id = [1,2,3,4].sample
      $db.execute(sql, [params[:name], house_id])
      redirect to("/students?house_id=#{house_id}")
    end

    get('/students') do
      # after a student has been registered and placed in a house
      # display a message on the page that says (for example)
      # "Harry Potter has been placed in house Gryffindor"
      find_house = "SELECT name FROM houses WHERE id = ?"
      # result of query is an array
      @house = $db.execute(find_house, [params[:house_id]]).first
      sql = "SELECT * FROM students"
      @students = $db.execute(sql)
      erb :students
    end

    post('/students/:id') do
      sql = "DELETE FROM students WHERE id = ?"
      id = params[:id]
      if params[:spell] == "avadah kadavra"
        $db.execute(sql, [id])
      end
      redirect to("/students")
    end

  end # Server
end # App
