require 'pry'
class SessionsController < ApplicationController
  def new

  end

  def create
    user = User.find_by({email: params[:email]})
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id

      redirect_to user_path(user)
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    binding.pry
    redirect_to '/login'
  end

end