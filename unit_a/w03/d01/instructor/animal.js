// constructor function
// use a capital letter to denote its use
var Animal = function Animal(name){
  this.name = name; // this value is passed in
  this.weight = 500; // default value
  this.belly = []; // every instance will have its own array
}

// Animal.prototype.belly = []; // this would define it once for errbody

Animal.prototype.sayName = function(){
  // every instance will call this function
  // in the context of itself
  return "Hello my name is " + this.name;
}

Animal.prototype.eat = function(food){
  this.belly.push(food);
}

var elephant = new Animal('Madeline');
var tiger = new Animal('Paul');

elephant.sayName() // we're invoking the .sayName method in the CONTEXT of the elephant
elephant.eat("barley") // added to the elephant array
tiger.eat("bananas") // added to the tiger array
