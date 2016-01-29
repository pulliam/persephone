class PaintingsController < ApplicationController
	def index
		@paintings = Painting.all
	end

	def show
		@paintings = Painting.all
		@painting = Painting.find(params[:id])
	end

	def new
		@painting = Painting.new
	end

	def create
		@painting = Painting.create(painting_params)
		redirect to @painting.artist
	end

	private
    def painting_params
      params.require(:painting).permit(:title, :medium, :artist_id)
    end
end