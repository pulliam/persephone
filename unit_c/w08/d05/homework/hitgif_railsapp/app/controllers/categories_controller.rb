class CategoriesController < ApplicationController
  def markdown(text) # Define method markdown with redcarpet gem
		Redcarpet::Markdown.new(Redcarpet::Render::HTML).render(text)
  end

  def index
  	@categories = Category.all
  end

  def show
	  @category = Category.find(params[:id])
	  @articles = @category.articles
  end

end