class RecordsController < ApplicationController
  def markdown(text) # Define method markdown with redcarpet gem
		Redcarpet::Markdown.new(Redcarpet::Render::HTML).render(text)
  end

  def index
  	@article = Article.find(params[:id])
    @records = @article.records.order(time_created: :desc)
  end
  def show
  	@record = Record.find(params[:id_record])
    @article = Article.find(params[:id])
  end
end