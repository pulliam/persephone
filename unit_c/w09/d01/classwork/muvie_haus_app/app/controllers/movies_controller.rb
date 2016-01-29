require 'httparty'
require 'json'
require 'uri'

class MoviesController < ApplicationController
	def index
		@movies = Movie.all
	end

	def show
		@movie = Movie.find(params[:id])
	end

	def search
		search_query = params[:q]
		response = HTTParty.get("http://www.omdbapi.com/?t=#{search_query}&y=&plot=short&r=json")
		@title = JSON.parse(response.body)["Title"]
		@runtime = JSON.parse(response.body)["Runtime"]
		@rating = JSON.parse(response.body)["Rated"]
		@year = JSON.parse(response.body)["Year"]
		@cast = JSON.parse(response.body)["Actors"]
		@img = JSON.parse(response.body)["Poster"]
		@movie = Movie.new
	end

	def create
		@movie = Movie.create(movie_params)
		redirect_to @movie
	end

	def destroy
		@movie = Movie.find(params[:id])
		@movie.destroy
		redirect_to movies_path
	end

  private 
  	def movie_params
  		params.require(:movie).permit(:title, :runtime, :rating, :year, :cast, :img_url)
  	end

end
