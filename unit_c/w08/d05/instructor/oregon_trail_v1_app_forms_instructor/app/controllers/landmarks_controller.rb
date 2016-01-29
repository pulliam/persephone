class LandmarksController < ApplicationController

  # GET /landmarks
  def index
    @landmarks = Landmark.all
  end

  # GET /landmarks/1
  def show
    @landmark = Landmark.find(params[:id])
  end
end
