class ArticlesController < ApplicationController
  def markdown(text) # Define method markdown with redcarpet gem
		Redcarpet::Markdown.new(Redcarpet::Render::HTML).render(text)
  end

  def index
  	@articles = Article.all
  end

  def show
  	@article = Article.find(params[:id])
  end

  def by_order
    articles = Article.all
    @articles = articles.order(params[:order] => :desc) unless params[:order] == "name"
    @articles = articles.order(params[:order] => :asc) if params[:order] == "name"	
  end

  def new
    @article_gif = params[:gif]  
    @article = Article.new
  end

  def create 
    @article = Article.new(article_params)
    Record.create(record_params)
    if @article.save
      flash[:notice] = 'Article was successfully created'
      redirect_to @article
    else
      render :new
    end
  end

  def edit
    @article = Article.find(params[:id].to_i)
    @article_gif = @article.gif
  end

  def update
    @article = Article.find(params["id"])
    @article.update({ name: params["name"], content: params["content"], time_created: DateTime.now, category_id: params["category"], user_id: session[:user_id] })
    @record = Record.create({ name: params["name"], content: params["content"], time_created: DateTime.now, category_id: params["category"], user_id: session[:user_id], article_id: article.id } )
    redirect_to @article
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end

  private 
    def article_params
      params.require(:article).permit(:name, :content, :time_created, :category_id, :user_id, :gif)
    end
    def record_params
      params.require(:record).permit(:name, :content, :time_created, :category_id, :user_id, :gif, :article_id)
    end
end