# == Schema Information
#
# Table name: bands
#
#  id                  :integer          not null, primary key
#  name                :string
#  has_explicit_lyrics :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Band < ActiveRecord::Base
  has_many(:events)
  has_many(:venues, through: :events)
  has_and_belongs_to_many(:genres)

  def self.family_friendly
    where(has_explicit_lyrics: false)
  end
end
