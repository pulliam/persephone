require('pry')

$songs = [{rank: 1 ,          artist: "Al Jolson           ",  title: "Swanee                              ", year: "1920"},
{rank: 2 ,          artist: "Paul Whiteman       ",  title: "Whispering                          ", year: "1920"},
{rank: 3 ,          artist: "George Gershwin     ",  title: "Rhapsody in Blue                    ", year: "1924"},
{rank: 4 ,          artist: "Gene Austin         ",  title: "Bye Bye, Blackbird                  ", year: "1926"},  
{rank: 5 ,          artist: "Bessie Smith        ",  title: "Down Hearted Blues                  ", year: "1923"},
{rank: 6 ,          artist: "Ben Bernie          ",  title: "Sweet Georgia Brown                 ", year: "1925"},
{rank: 7 ,          artist: "Vernon Dalhart      ",  title: "The Prisoner's Song                 ", year: "1925"},
{rank: 8 ,          artist: "Eddie Cantor        ",  title: "Makin' Whoopee                      ", year: "1929"},
{rank: 9 ,          artist: "Jimmie Rodgers      ",  title: "T For Texas (Blue Yodel No 1)       ", year: "1928"},
{rank: 10,          artist: "Hoagy Carmichael    ",  title: "Stardust                            ", year: "1927"},
{rank: 11,          artist: "Isham Jones         ",  title: "It Had to Be You                    ", year: "1924"},
{rank: 12,          artist: "Al Jolson           ",  title: "California, Here I Com              ", year: "1924"},
{rank: 13,          artist: "Fanny Brice         ",  title: "My Man                              ", year: "1922"},
{rank: 14,          artist: "Gene Austin         ",  title: "My Blue Heaven                      ", year: "1927"},
{rank: 15,          artist: "Fats Waller         ",  title: "Ain't Misbehavin'                   ", year: "1929"},
{rank: 16,          artist: "Frankie Trumbauer   ",  title: "Singin' the Blues                   ", year: "1927"},
{rank: 17,          artist: "Bessie Smith        ",  title: "St Louis Blues                      ", year: "1925"},
{rank: 18,          artist: "Paul Whiteman       ",  title: "Three O'Clock in The Morning        ", year: "1922"},
{rank: 19,          artist: "Al Jolson           ",  title: "April Showers                       ", year: "1922"},
{rank: 20,          artist: "Ethel Waters        ",  title: "Am I Blue?                          ", year: "1929"},
{rank: 21,          artist: "Helen Kane          ",  title: "I Wanna Be Loved By You             ", year: "1928"},
{rank: 22,          artist: "Arthur Gibbs & his Gang", title: "Charleston                          ", year: "1924"},
{rank: 23,          artist: "Al Jolson           ",  title: "Toot Toot Tootsie (Goodbye)         ", year: "1922"},
{rank: 24,          artist: "Duke Ellington      ",  title: "Black & Tan Fantasy                 ", year: "1928"},
{rank: 25,          artist: "Paul Robeson        ",  title: "Ol' Man River                       ", year: "1928"},
{rank: 26,          artist: "Al Jolson           ",  title: "Sonny Boy                           ", year: "1928"},
{rank: 27,          artist: "Isham Jones         ",  title: "Swingin' Down the Lane              ", year: "1923"},
{rank: 28,          artist: "Jack Smith          ",  title: "Me & My Shadow                      ", year: "1927"},
{rank: 29,          artist: "Louis Armstrong     ",  title: "West End Blues                      ", year: "1928"},
{rank: 30,          artist: "Billy Jones         ",  title: "Yes! We Have No Bananas            ", year: "1923"}]


$songs = $songs.map do |song|
  song[:artist] = song[:artist].strip
  song[:title] = song[:title].strip
  song
end

def search_by_rank(rank)
  # I should return a single song or nil.
  $songs.find do |song|
    song[:rank] == rank.to_i
  end
end

def search_by_year(year)
  # I should return an array of zero or more songs.
  $songs.select do |song|
    song[:year] == year.to_s
  end
end

def search_by_title(title)
  # I should return an array of zero or more songs.
  $songs.find_all do |song|
    song[:title].downcase == title.downcase
  end
end

def search_by_artist_last_name(last_name)
  # I should return an array of zero or more songs.

end

def search_by_artist_full_name(full_name)
  # I should return an array of zero or more songs.

end


binding.pry