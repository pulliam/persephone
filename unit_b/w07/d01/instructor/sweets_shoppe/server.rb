module App
  class Server < Sinatra::Base

    set :method_override, true
    # Visit the index page of his site and see a list of all his desserts.
    get "/" do
      # This could be whatever we want, but let's make it list out our sweets.
      # Go to the database, get information
      sql = "SELECT * FROM sweets"
      @results = $db.execute(sql)
      # binding.pry
      # Give 'em stuff
      erb :index
    end
    # Create a new dessert and have it saved to the database.
    # Send the user a form for a new sweet
    get "/sweets/new" do
      erb :new_sweet
    end
    post "/sweets" do
      # Add a new sweet to our database!
      # How do we access what the user sent to us?
      # binding.pry
      sql = "INSERT INTO sweets (name, flavor, img_url) VALUES (?,?,?)"
      $db.execute(sql, [
        params["sweet_name"],
        params["flavor"],
        params["img_url"],
        ])
      redirect to "/"
    end  
    # Click on a dessert to get more details about it, including a picture.
    get "/sweets/:id"  do
      sql = "SELECT * FROM sweets WHERE id = ?"
      # find the right sweet in the db, get it out
      @sweet = $db.execute(sql, params[:id])[0]
      # Give the user what they want - render a template with the information we pulled out of the db
      erb :show_sweet
    end

    post "/sweets/:id" do
      # Figure out if the user wants to delete something or update or something else??
      puts "I got a post request"      
    end

    # Delete unpopular/discontinued desserts.
    delete "/sweets/:id" do
      sql = "DELETE FROM sweets WHERE id = ?"
      $db.execute(sql, params["id"])
      redirect to "/"
    end

  end
end




