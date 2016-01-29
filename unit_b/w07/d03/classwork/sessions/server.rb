module App

  class Server < Sinatra::Base
    set :method_override, true
    enable :sessions

    get "/" do
      @user = User.find(session[:user_id]) if session[:user_id]
      #find the user with id = to session id, and store in this variable IF session exists in Users. 
      #find works for id only!
      erb :index      
    end

    post "/sessions" do
      #Try to find the user in the DB
      user = User.find_by(name: params[:name])
      #Save their ID into the session:
      session[:user_id] = user.id 
      #Im saying that I want to create inside my 
      #pre ruby made session has a new user_id, and set the value to = user.id
      redirect to '/'
    end

    delete "/sessions" do
      #Im saying my session id = nil, so that deletes the session which = log out!
      session[:user_id] = nil
      redirect to '/'
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
      redirect to '/' if !session[:user_id]
      #Im checking which user is logged in
      user = User.find(session[:user_id])
      #Im using the assocition between User and Visits to check the visits of the specified user. 
      @visits = user.visits

      erb :visits
    end

    get "/users" do
      #making sure no one can access this link if not logged!:
      redirect to '/' if !session[:user_id]
      @users = User.all
      erb :users

      #other way of doing same thing:
      # if session[:user_id]
      #   @users = User.all
      #   erb :users
      # else
      #   redirect to '/'
      # end
    end

    get "/users/:id" do
    #WHEN A SPECIFIC USER IS CLICKED, REDIRECT TO THIS PAGE WITH THEIR ID
      redirect to '/' if !session[:user_id]
    #create a new entry into visits:
    # visited_id INTEGER,
    # visitor_id INTEGER,
    # created_at DATETIME
      Visit.create(visited_id: params[:id], visitor_id: session[:user_id], created_at: DateTime.now)
      @user = User.find(params[:id])
      erb :user
    end

  end

end
