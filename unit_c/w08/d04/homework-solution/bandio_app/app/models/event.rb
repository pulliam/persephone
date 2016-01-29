# == Schema Information
#
# Table name: events
#
#  id                :integer          not null, primary key
#  performs_on       :date
#  is_alcohol_served :boolean          default(TRUE)
#  band_id           :integer
#  venue_id          :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Event < ActiveRecord::Base
  belongs_to(:band)
  belongs_to(:venue)
end
