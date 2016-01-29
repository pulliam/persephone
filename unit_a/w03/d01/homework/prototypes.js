//Part1 - Object Constructor Function for Shirt:
var Shirt = function Shirt(size, color, text){  
	this.size = size;
	this.color = color;
	this.text = text;
};
//Part 1 - New Objects:
var pearlJamTee = new Shirt('XL', 'Faded Black', 'Yield Tour 1998');
var hipsterPlaid = new Shirt('M', 'Red', 'NO LOGO');
var thaisFavorite = new Shirt('S', 'Black', null);



//Part2 - Object Constructor Function for Car:
var Car = function Car(year, make, model, color){
	this.year = year;
	this.make = make;
	this.model = model;
	this.color = color;
};
//Part2 - Method on the Car Prototype:
Car.prototype.startEngine = function (){
	return 'Vrum vrum vrum!';
}
//Part2 - New Object:
var dadsMiata = new Car(1992, 'Mazda', 'Miata', 'Red');
//Part 2 - Call the Method:
dadsMiata.startEngine();
//Part 2 - New Objects:
var myFirstCar = new Car(1995, 'Oldsmobile', 'Cutlass Cierra SL', 'Maroon');
var thaisFirstCar = new Car(2011, 'Ford', 'Focus', 'White');



//Part 3 - new Contructor:
var Movie = function Movie(title, year, director, rating){
	this.title = title;
	this.year = year;
	this.director = director;
	this.rating = rating;
}
//Part 3 - Create a Method:
Movie.prototype.prettyPrint = function(){
	return this.title + " (" + this.year + ") " + "by " + this.director;
}
//Part 3 - New Objects:
var adaptation = new Movie('Adaptation', 2002, 'Spike Jonze', 'R');
var jurassic = new Movie('Jurassic Park', 1993, 'Steven Spielberg', 'PG-13');
var totoro = new Movie('My Neighbor Totoro', 1993, 'Hayao Miyazaki', 'G');
var pulp = new Movie('Pulp Fiction', 1994, 'Quentin Tarantino', 'R');
var tiffanys = new Movie("Breakfast at Tiffany's", 1961, 'Blake Edwards', 'G');
var pirates = new Movie('Pirates of the Caribbean: The Curse of the Black Pearl', 2003, 'Gore Verbinski', 'PG-13');



//Part 4 - Object Contructor:
var Band = function Band(name){
	this.name = name;
	this.influences = ['The Velvet Underground', 'The Beatles'];
}
//Part 4 - Create a Method ripOff
Band.prototype.ripOff = function (band){
	this.influences.push(band);
};
//Part 4 - Create a Methof soundsLike
Band.prototype.soundsLike = function (bandName){
	if (this.influences.indexOf(bandName) !== 0){
		return true;
	} else {
		return false;
	}
}



//Part 5 - Object Contructor:
var Musician = function Musician(name, instrument){
	this.name = name;
	this.instrument = instrument;
}
//Part 5 - Create a Method:
Musician.prototype.jam = function(){
	return this.name + " is jammin' on " + this.instrument;
}
//Part 5 - New property:
var Band = function Band(name){
	this.name = name;
	this.influences = ['The Velvet Underground', 'The Beatles'];
	this.members = [];
}
//Part 5 - Create a Method:
Band.prototype.join = function(newbieMusician){
	this.members.push(newbieMusician);
}
//Part 5 - Create a Method:
Band.prototype.rockOut = function(Musician){
	for (i=0; i < this.members.length; i++){
		return Musician.jam;
	}
}
//Part 5 - Create a Method:
Band.prototype.artisticDifferences = function(bandMember){
	if (bandMember){
		this.members.splice(indexOf(bandMember), 1);
	}
}
//Part 5 - Create Bands:
var john = new Musician('John Lennon', 'Guitar');
var paul = new Musician('Paul McCartney', 'Bass');
var george = new Musician('George Harrison', 'Guitar');
var ringo = new Musician('Ringo Starr', 'Drums');
var Beatles = new Band('The Beatles');
Beatles.join(john, paul, george, ringo);

var black = new Musician('Black Francis', 'Guitar');
var kim = new Musician('Kim Deal', 'Bass');
var joey = new Musician('Joey Santiago', 'Guitar');
var david = new Musician('David Lovering', 'Drums');
var Pixies = new Band('The Pixies');
Pixies.join(black, kim, joey, david);








