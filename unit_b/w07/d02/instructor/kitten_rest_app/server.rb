module App
  class Server < Sinatra::Base
    set :method_override, true

    get "/"  do
      erb :index
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

    # View all kittens
    get "/kittens" do
        @kittens = Kitten.all
        erb :kittens
    end
   
    # View a form to create a new kitten
    get "/kittens/new" do
        erb :new_kitten
    end

    # Create a new kitten
    post "/kittens" do
        kitten = Kitten.create({name: params["name"], img_url: params["img_url"], fuzziness: params["fuzziness"], age: params["age"]})
        redirect to "/kittens/#{kitten.id}"
    end
    # View one kitten
    get "/kittens/:id" do
        id = params["id"]
        # @kitten = Kitten.find_by({id: id})
        @kitten = Kitten.find(id)
        erb :show
    end
    
    # View a form to edit a kitten
    get "/kittens/:id/edit" do
        @kitten = Kitten.find(params["id"])
        erb :edit_kitten
    end
    
    # Submit updates to a kitten
    patch "/kittens/:id" do
        kitten = Kitten.find(params["id"])
        kitten.update({name: params["name"], age: params["age"], fuzziness: params["fuzziness"], img_url: params["img_url"]})
        redirect to "kittens/#{kitten.id}"
    end

    # Delete a kitten
    delete "/kittens/:id" do
        id = params["id"]
        kitten = Kitten.find_by({id: id})
        kitten.destroy
        redirect to "/kittens"
    end

  end
end





