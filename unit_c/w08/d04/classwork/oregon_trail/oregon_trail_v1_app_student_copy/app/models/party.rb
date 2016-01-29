class Party < ActiveRecord::Base
  has_many :travelers
  has_one :location

  def members
    travelers
  end

  def current_landmark
    Landmark.find_by(mile_marker: miles_traveled)
  end

  def last_landmark
    Landmark.where("mile_marker < ?", miles_traveled).order(:mile_marker).last
  end

  def next_landmark
    Landmark.where("mile_marker > ?", miles_traveled).order(:mile_marker).first
  end
end
