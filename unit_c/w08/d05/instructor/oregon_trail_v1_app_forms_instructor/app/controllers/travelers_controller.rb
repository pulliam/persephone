class TravelersController < ApplicationController

  # GET /travelers
  def index
    @travelers = Traveler.all
  end

  # GET /travelers/1
  def show
    @traveler = Traveler.find(params[:id])
  end

  # GET /travelers/new
  def new
    @traveler = Traveler.new
  end

  # GET /travelers/1/edit
  def edit
    @traveler = Traveler.find(params[:id])
  end

  # POST /travelers
  def create
    @traveler = Traveler.new(traveler_params)

    if @traveler.save
      redirect_to @traveler, notice: 'Traveler was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /travelers/1
  def update
    @traveler = Traveler.find(params[:id])

    if @traveler.update(traveler_params)
      redirect_to @traveler, notice: 'Traveler was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /travelers/1
  def destroy
    @traveler = Traveler.find(params[:id])
    @traveler.destroy
    redirect_to travelers_url, notice: 'Traveler was successfully destroyed.'
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def traveler_params
      params.require(:traveler).permit(:name, :health, :weight)
    end
end
