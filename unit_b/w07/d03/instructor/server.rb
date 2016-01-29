module App

  class Server < Sinatra::Base
    set :method_override, true
    enable :sessions

    get "/" do
      @user = User.find(session[:user_id]) if session[:user_id]
      erb :index      
    end

    post "/sessions" do
      # Try to find user in DB
      user = User.find_by({name: params[:name]})
      #  Save their ID into the session!
      session[:user_id] = user.id
      redirect to "/"
    end

    delete "/sessions" do
      session[:user_id] = nil
      redirect to "/" 
    end

    get "/users/new" do
       erb :new_user 
    end
    
    post "/users" do
       User.create(name: params["name"], age: params["age"], location: params["location"], avatar_img_url: params["avatar_img_url"])
       redirect to "/"
    end

    get "/login" do
      erb :login
    end


    get "/visits" do
      redirect to "/" if !session[:user_id]
      user = User.find(session[:user_id])
      @visits = user.visits
      erb :visits
    end

    get "/users" do
      redirect to "/" if !session[:user_id]

      @users = User.all
      erb :users

      # if session[:user_id]
      #   @users = User.all
      #   erb :users
      # else
      #   redirect to "/"
      # end
    end

    get "/users/:id" do
      redirect to "/" if !session[:user_id]
  # visited_id INTEGER,
  # visitor_id INTEGER,
  # created_at DATETIME
      Visit.create({visited_id: params[:id], visitor_id: session[:user_id], created_at: DateTime.now})
      @user = User.find(params[:id])
      erb :user
    end

  end

end
