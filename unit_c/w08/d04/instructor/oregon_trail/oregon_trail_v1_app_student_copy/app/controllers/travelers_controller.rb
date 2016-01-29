class TravelersController < ApplicationController

  def index
    @travelers = Traveler.all
  end

  def show
    @traveler = Traveler.find(params[:id])
  end

  # GET /travelers/new
  def new
    @traveler = Traveler.new
  end

  # POST /travelers
  def create
    @traveler = Traveler.new(traveler_params)
    if @traveler.save
      flash[:notice] = 'Traveler was successfully created'
      redirect_to @traveler
    else
      render :new
    end
  end

  def edit
    @traveler = Traveler.find(params[:id])
  end

  def update
    @traveler = Traveler.find(params[:id])
    if @traveler.update(traveler_params)
      redirect_to @traveler, notice: "Traveler was successfully updated"
    else
      render :edit
    end
  end

  def destroy
    @traveler = Traveler.find(params[:id])
    if @traveler.destroy
      redirect_to travelers_path, notice: "Traveler died of dysentery"
    else
      redirect_to @traveler, notice: "Traveler miraculously survived all the diseases"
    end
  end

  private

  # Strong Parameters
  def traveler_params
    params.require(:traveler).permit(:name, :health, :weight)
  end

end
