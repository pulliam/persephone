# == Schema Information
#
# Table name: venues
#
#  id                 :integer          not null, primary key
#  name               :string
#  city               :string
#  state              :string
#  is_family_friendly :boolean          default(FALSE)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Venue < ActiveRecord::Base
  has_many(:events)
  has_many(:bands, through: :events)
end
