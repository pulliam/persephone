class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.venue = @venue
    if @event.save
      redirect_to @event
    else
      render :new
    end
  end

  def event_params
    params.require(:event).permit(:performs_on, :is_alcohol_served, :band_id, :venue_id)
  end
end