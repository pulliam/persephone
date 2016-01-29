module App
  class Server < Sinatra::Base

    # this is a global variable
    # # it'll persist between requests
    # # instance variables won't
    $db = {
      :exes => []
    }

    get('/') do
      erb :index
    end

    get('/greet') do
      erb :greet
    end

    post('/') do
      "Hello from post"
      redirect to("/") # send back 303 and new location
    end

    post('/secretbank') do
      params[:pass] # this key comes from the input's name attribute
      # store the password in a database and then buy some stuff
      # "your password is #{params[:pass]}"
      redirect to("/greet")
    end

    post("/exgirlfriends") do
      params[:name]
      params[:reason]
      $db[:exes].push(params[:reason])
      redirect to("/new_apartment")
    end

    get("/new_apartment") do
      $db[:exes].join(", ")
    end
  end
end
