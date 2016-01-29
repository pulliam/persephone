class WagonsController < ApplicationController

  def show
    @wagon = Wagon.find(params[:id])
  end

  def new
    @party = Party.find(params[:party_id])
    @wagon = @party.wagon.build
  end

  def create
    @party = Party.find(params[:party_id])
    @wagon = @party.wagon.create(wagon_params)

    if @wagon
      redirect_to @wagon
    else
      render :new
    end

  end
end
