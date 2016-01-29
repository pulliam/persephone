require_relative("my_data/dogs")

module App

  class Server < Sinatra::Base

    get("/") do
      erb ""
    end

    get("/dogs") do
      @dogs = App::MyData::DOGS

      erb(:'dogs/index', {layout: true})
    end

    get("/dogs/:id") do
      id = params[:id]
      dogs = App::MyData::DOGS

      @dog = dogs.find { |dog| dog["id"] == id }

      erb :'dogs/show'
    end

    get("/cats") do
      @cats = []
      erb :cats, layout: true
    end

    get("/dogs/:sex") do

    end
  end

end