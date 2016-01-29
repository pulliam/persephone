class SaladsController < ApplicationController
  def index
  end

  def show
    @salad = Salad.find(params[:id])
  end

  def new
    @salad = Salad.new
  end

  def create
    @salad = Salad.create(salad_params)
    # redirect_to "/salads/#{@salad.id}" 
    redirect_to @salad
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def salad_params
      params.require(:salad).permit(:leafy_green)
    end

end




