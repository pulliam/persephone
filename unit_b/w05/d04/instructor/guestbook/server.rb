module App
  class Server < Sinatra::Base

    $db = {
      :entries => []
    }

    get('/') do
      erb(:index)
    end

    get('/guestbook') do
      @entries= $db[:entries]
      erb(:guestbook)
    end

    get('/new_entry') do
      erb(:form)
    end

    post('/add_entry') do
      # persist this data
      entry = {
        message: params[:message],
        email: params[:email],
        name: params[:name]
      }
      $db[:entries].push(entry)

      redirect to("/guestbook")
    end

  end
end
