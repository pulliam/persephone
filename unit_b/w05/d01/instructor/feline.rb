class Feline


  def initialize(species, number_limbs)
    @species = species
    @number_limbs = number_limbs
  end

  def claws?
    true
  end

  def vocalize
    if @@size > 5
      roar
    else
      purr
    end
  end

  def hunt
    "don't bother me I'm stalking my prey"
  end

  def meow
    "meow meow"
  end
end
