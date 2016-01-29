class WelcomeController < ApplicationController
  def index
  	@message = params[:message]
  end

  def about_us
  end
  
end