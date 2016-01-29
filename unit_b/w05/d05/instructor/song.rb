class Song
  attr_accessor :rank, :artist, :last, :song, :year
​
  def initialize(rank, artist, song, year)
    @rank = rank
    @artist = artist
    @song = song
    @year = year
​  end
end
