var bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

//Determine the total cumulative gross of the Bond franchise. Save it to a sensibly-named variable.
var pluckMoney = function(array){
  var gross = parseInt(array["gross"].split('$')[1].replace(/,/g,''));
  console.log(gross);
  return gross;
}
function addsIt(memo, next){
  return memo + next;
}
var totalGross = bondFilms.map(pluckMoney).reduce(addsIt);

// Create a new array with the names of the all actors who have ever played Bond, 
// but with no duplicates. (One Roger Moore is more than enough.) Save it to a sensibly-named variable.
var allActorsArray = function(array){
  return array["actor"];
}
var allActors = bondFilms.map(allActorsArray);

function selectIt(actorName, position) {
      return allActors.indexOf(actorName) == position;
  }
var noDuplicates = allActors.filter(selectIt);


//Create a new array with the names of the Bond films.
var allNamesofMovies = function(array){
  return array["title"];
}
var allMovies = bondFilms.map(allNamesofMovies);


//Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
var allYearsOfBonds = function(array){
  return array["year"];
}

var yearsOfBondsArray = bondFilms.map(allYearsOfBonds);
function filterOdds(value, index){
  return yearsOfBondsArray[index] % 2 !== 0;
}
var oddBonds = yearsOfBondsArray.filter(filterOdds);


//Create a new array `newBonds` of all Bond films released after 1980

var allYearsOfBonds = function(array){
  return array["year"];
}

function filterNewOnes(value, index){
  return yearsOfBondsArray[index] > 1980;
}

var newBonds = yearsOfBondsArray.filter(filterNewOnes);





