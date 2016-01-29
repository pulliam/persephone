require_relative("my_data/cats")

module App
  class Server < Sinatra::Base

    @@cats = App::MyData::CATS

    get("/") do
      
    end

    get("/cats") do

    end

  end
end
