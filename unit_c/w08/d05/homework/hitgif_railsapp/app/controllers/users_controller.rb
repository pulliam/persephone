class UsersController < ApplicationController
  enable :sessions # Enable sessions creation for logins
  
  def markdown(text) # Define method markdown with redcarpet gem
		Redcarpet::Markdown.new(Redcarpet::Render::HTML).render(text)
  end

  def index
  end


end