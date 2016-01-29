class PartiesController < ApplicationController

  # GET /parties
  def index
    @parties = Party.all
  end

  # GET /parties/1
  def show
    @party = Party.find(params[:id])
    # @party.travelers or @party.members
    # @party.wagon
  end

  # GET /parties/new
  def new
    @party = Party.new
  end

  # GET /parties/1/edit
  def edit
    @party = Party.find(params[:id])
  end

  # POST /parties
  def create
    @party = Party.new(party_params)
    @party.miles_traveled = 0
    @party.pounds_of_meat = 50

    if @party.save
      flash[:notice] = 'Party was successfully created.'
      redirect_to @party
    else
      render :new
    end
  end

  # PATCH/PUT /parties/1
  def update
    @party = Party.find(params[:id])

    if @party.update(party_params)
      redirect_to @party, notice: 'Party was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /parties/1
  def destroy
    @party = Party.find(params[:id])
    @party.destroy

    flash[:notice] = 'Party was successfully destroyed.'
    redirect_to parties_url
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def party_params
      params.require(:party).permit(:name)
    end
end
