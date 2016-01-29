module App
  class Server < Sinatra::Base

    get('/') do
      erb :index
    end

    get('/greet') do
      erb :show
    end

    post('/') do
      "Hello from post"
      redirect to("/")
    end
  end
end
