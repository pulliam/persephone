require("pry")

class FannyPack
	attr_accessor :id, :color, :material, :img_url

	def initialize(attrs={})
		@id = attrs["id"]
		@color = attrs["color"]
		@material = attrs["material"]
		@img_url = attrs["img_url"]
	end
end


binding.pry
