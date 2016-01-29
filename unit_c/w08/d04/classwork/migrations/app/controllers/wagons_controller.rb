class WagonsController < ApplicationController

  def show
    @wagon = Wagon.find(params[:id])
  end
end
