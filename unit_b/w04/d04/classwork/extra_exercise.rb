# Create a hash where the keys are names of instructors and classmates.

  persephone = {
    students: {
      thais: {
        codename: "pulliam",
        superpower: "coding",
        weapon: "intelligence",
        weaknesses: ["perfeccionism", "being too amazing"]
      },
    },
    instructors: {
      anna: {
        codename: "kara-A-OK",
        superpower: "singing",
        weapon: "relentless optimism",
        weaknesses: ["puppies", "bees", "soybeans"]
      },
      phil: {
        codename: "the philter",
        superpower: "analogies",
        weapon: "kaftan",
        weaknesses: ["roommates", "ex-girlfriends"]
      },
      sung: {
        codename: "cupcakes",
        superpower: "stoicism",
        weapon: "ascot",
        weaknesses: ["bullets", "doldrums", "happiness"]
      }
    }
  }

# Print out a paragraph for each person
# [_____]'s secret identity is [_____]. They use their power of [_____] to deliver justice to wrong doers everywhere. Their weapon of choice is [_____] and it strikes fears in the heart of their enemies. Their weaknesses include [_____, _____, _____, ...].
# Bonus: If there are more than one weakness, add the string and before the last one: [_____, _____, and _____].

# people = []
# persephone.each do |i|
#   people << i
# end
# print people

if persephone.has_key?(:students) && persephone[:students].has_key?(:thais) then
  puts "#{persephone[:students].keys}'s secret identity is #{persephone[:students][:thais][:codename]}"
end


# persephone.each_with_index do 
