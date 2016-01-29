module App
  class Server < Sinatra::Base

    # this code gets run when we curl localhost
    # GET /
    get("/") do
      "Hello World"
    end

    # this code gets run at /greet
    #{ }"/greet/mom?name=elaine"
    get("/greet/mom") do
      # the last line goes back
      # it's just a string!
      "<h1>hi #{params[:name]}</h1>"
    end

    # GET /make/phil/code_alone
    # this route gets hit before the dynamic one below
    get("/make/phil/code_alone") do
      "waa waaa"
    end

    # GET /make/sung/breakdance
    get("/make/:name/:action") do
      name = params[:name]
      action = params[:action]
      "#{name} is going to #{action}"
    end

    # curl -X POST 127.0.0.1:9292/board --data "rows=7&cols=4"
    # ensure you send data in quotes otherwise it doesn't escape
    # properly and messes up the curl command!
    post("/board") do
      "you hit #{params[:cols]} #{params[:rows]}\n"
    end

  end # Server
end # App
