class MoviesController < ApplicationController

  def index
    @movies = Movie.all
  end

  def search
    title = params[:q]
    @movie_info = HTTParty.get("http://www.omdbapi.com/?t=#{title}&r=json&plot=short")
  end

  def create
    movie = Movie.create({
      title: params["title"],
      runtime: params["runtime"],
      rating: params["rating"],
      actor_1: params["actor_1"],
      release_year: params["release_year"],
      img_url: params["img_url"],
    })
    redirect_to movies_path
  end

  def show 
    @movie = Movie.find(params[:id])
  end

  def destroy
    movie = Movie.find(params[:id]).destroy
    redirect_to movies_path
  end



end
