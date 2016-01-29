require("active_record")

class Politician < ActiveRecord::Base
end

class PoliticalParties < ActiveRecord::Base
end

p1 = Politician.find_by_id(1)
p1.name #=> this should return the row's name (politician name in this case)

Politician.all #=> should return everything in it in an array.