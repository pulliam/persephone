# http://guides.rubyonrails.org/active_record_basics.html
class Clown < ActiveRecord::Base

  # active record creates getters and setters from our column names
  # attr_accesor :name, :nose_color, :shoe_size

  # http://guides.rubyonrails.org/active_record_validations.html
  validates :name, length: {in: 8..16}

  # http://guides.rubyonrails.org/association_basics.html
  belongs_to :car

  # http://guides.rubyonrails.org/active_record_callbacks.html
  after_save :evil_laughter

  # We can still define our own methods
  def honk
    red_nose? ? "Honk!" : "Ouch!"
  end

  def red_nose?
    # we can access the methods defined from active record
    nose_color == 'red'
  end

  # Protected and Private methods
  protected
  # protected - can only be accessed from within the object itself, as well as any subclasses
  # private - same as protected, but the method doesn't exist in subclasses
  def evil_laughter
    puts "MWA HA HA HA"
  end

end
