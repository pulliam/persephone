class Party < ActiveRecord::Base
  has_many :travelers

  def members
    travelers
  end

  def travel(stops)
    self.miles_traveled = self.miles_traveled + (stops * 250)
    self.landmark = Landmark.find_by(mile_marker: miles_traveled)
    miles_traveled
  end

  def last_landmark
    Landmark.where("mile_marker < ?", self.miles_traveled).order(:mile_marker).last
  end

  def next_landmark
    Landmark.where("mile_marker > ?", self.miles_traveled).order(:mile_marker).first
  end
end
