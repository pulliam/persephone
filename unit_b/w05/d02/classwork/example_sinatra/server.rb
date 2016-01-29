module App
  class Server < Sinatra::Base

    # execute the following when we run
    # curl -X GET localhost:3000
    get("/") do
      "Hello World"
    end
     get("/thais") do
      "Hello Thais"
    end
    get("/:name") do
  		"Hello #{params['name']}!"
	end

  end
end
