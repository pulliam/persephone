Painting.destroy_all
Artist.destroy_all

artists = [
	{
	  name: "Vicent Van Gogh",
	  nationality: "Dutch"
	},
	{
	  name: "Pablo Picasso",
	  nationality: "Spanish"
	},
	{
	  name: "Katsushika Hokusai",
	  nationality: "Japanese"
	}
]

vangoghs = [
	{
	  title: "Starry Night",
	  medium: "Oil on Canvas"
	},
	{
	  title: "Cafe Terrace at Night",
	  medium: "Oil on Canvas"
	}
]
	
picassos = [
	{
	  title: "Guernica",
	  medium: "Oil on Canvas"
	},
	{
	  title: "The Old Guitarist",
	  medium: "Oil on Panel"
	}
]

katsushikas = [
	{
	  title: "The Great Wave off Kanagawa",
	  medium: "Color Woodblock"
	},
	{
	  title: "Red Fuji",
	  medium: "Ukiyo-e woodblock print"
	}
]

Artist.create(artists)

vangoghs.each do |painting|
  artist = Artist.first
  new_painting = Painting.create(painting)
  artist.paintings << new_painting
end

picassos.each do |painting|
  artist = Artist.second
  new_painting = Painting.create(painting)
  artist.paintings << new_painting
end

katsushikas.each do |painting|
  artist = Artist.third
  new_painting = Painting.create(painting)
  artist.paintings << new_painting
end





