require("pry")
module App
  class Server < Sinatra::Base
    set :method_override, true

    get "/"  do
        erb :index
    end

    get "/kittens" do
        @kittens = Kitten.all
        erb :kittens
    end

    get "/kittens/new" do
        erb :new_kitten
    end

    post "/kittens" do
        @name = params[:name]
        @fuzz = params[:fuzziness]
        @age = params[:age]
        Kitten.create(name: @name.to_s, fuzziness: @fuzz.to_i, age: @age.to_i)
        # "Hello, 1)#{@name}, 2)#{@fuzz}, 3)#{@age}"
        redirect to('/')
    end

    get "/kittens/:id" do
        @kitten = Kitten.find_by params[:id].to_i
        erb :show
    end


    get "/kittens/:id/edit" do
        @kitten = Kitten.find_by params[:id].to_i
        erb :edit_kitten
    end

    patch "/kittens/:id" do
        @id = params[:id]
        @updated_kitten = Kitten.find_by id: @id.to_i
        @updated_kitten.update(name: "#{params[:name]}") unless !params[:name]
        @updated_kitten.update(age: "#{params[:age]}") unless !params[:age]
        @updated_kitten.update(fuzziness: "#{params[:fuzziness]}") unless !params[:fuzziness]

        redirect to('/kittens')
    end

    delete "/kittens/:id" do
        @kitten = Kitten.find_by params[:id].to_i
        @kitten.destroy
        redirect to('/kittens')
    end

    # *----------------------------------------*
    #   Welcome to the server file!
    #   Fill in the routes below following
    #   RESTful conventions. 
    #   Remember, we've enabled method override
    #   above, so you have access to the
    #   delete and patch methods!
    #   Check out the views folder for clues
    #   to which methods you'll need to write
    #   routes for!
    # *----------------------------------------*

    # View all kittens OK
   
    # View a form to create a new kitten OK
    
    # Create a new kitten OK
    
    # View one kitten OK
    
    # View a form to edit a kitten OK
    
    # Submit updates to a kitten

    # Delete a kitten

  end
end
