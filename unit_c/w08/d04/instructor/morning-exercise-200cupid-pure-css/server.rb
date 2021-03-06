module App
  class Server < Sinatra::Base

    set :method_override, true
    enable :sessions

    # do this before every route handler
    before do
      @current_user = User.find(session[:user_id]) if session[:user_id]
    end

    get "/" do
      erb :index
    end

    get "/login" do
      erb :login
    end

    post "/sessions" do
      user = User.find_by({name: params[:name]}).try(:authenticate, params[:password])
      if user
        session[:user_id] = user.id
        redirect to "/"
      else
        redirect to "/login"
      end
    end

    delete "/sessions" do
      session[:user_id] = nil
      redirect to "/"
    end

    get "/signup" do
      erb :new_user
    end

    get "/users" do
      redirect to "/" unless @current_user
      @users = User.all
      erb :users
    end

    post "/users" do
      @user = User.create({
        name: params["name"],
        born_on: params["born_on"],
        location: params["location"],
        avatar_img_url: params["avatar_img_url"],
        password: params["password"],
        password_confirmation: params["password_confirmation"]
      })
      redirect to "/"
    end

    get "/users/:id" do
      redirect to "/" unless @current_user
      Visit.create({
        visited_id: params[:id],
        visitor_id: session[:user_id],
        created_at: DateTime.now
      })
      @user = User.find(params[:id])
      erb :user
    end

    get "/visits" do
      redirect to "/" unless @current_user
      user = User.find(session[:user_id])
      @visits = user.visits
      erb :visits
    end

  end # Server
end # App
