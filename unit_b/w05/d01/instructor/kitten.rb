require("pry")
require_relative("feline")

class Kitten < Feline

  @@litter =[]
  @@size = 1

  def self.litter
    @@litter
  end

  def self.all
    self.litter
  end

  # attr_reader (creates reader methods)
  # attr_writer (create writer methods)
  # attr_accessor (combination of attr_reader and attr_writer)

  attr_accessor :color, :breed, :fuzziness_level, :cuteness_level, :hungry, :vaccinated

  def initialize(color, breed, fuzziness_level = 5, cuteness_level = 5)
    #perform setup
    #setup attributes
    @color = color
    @breed = breed
    @fuzziness_level = fuzziness_level
    @cuteness_level = cuteness_level
    @hungry = true
    @vaccinated = false

    super("felix domestic", 4)

   register
  end

  def purr
    "purrr"
  end

  def eat(food)
    if food
      @hungry = false
    end
  end

  def meow
  "#{super} meeeeeeeooooooow"
  end

  def register
    @@litter.push(self) unless @@litter.include?(self)
  end





end

binding.pry
