// ////////////GRABMYBAG///////////////////////

// Create a new array called grabBag that contains the following data:
// "shoe"
// true
// 99
// null
var grabBag = ['shoe', true, 99, null];

// Using bracket notation, log the second item in the array to your console.
console.log(grabBag[1]);

//Write a for loop that iterates through your array and logs each element.
for (i=0; i < grabBag.length; i++){
	console.log(grabBag[i]);
	}

//Now, modify your code so that your loop logs the typeof each element.
	for (i=0; i < grabBag.length; i++){
	console.log(typeof(grabBag[i]));
	}

// Let's make it crowded! Add the following piece of data to the end of your grabBag array:
// [3,6,9]
grabBag.push('3', '6', '9');

// Add the following to the beginning of your grabBag array:
// { name: "Giorgio" }
grabBag.unshift({name: 'Giorgio'});

//Loop through your array again and log the typeof each element in your grabBag.
	for (i=0; i < grabBag.length; i++){
	console.log(typeof(grabBag[i]));
	}

//Now, remove the number 99 from your grabBag and save it to a variable named thatNumberIRemoved.
var thatNumberIRemoved = grabBag.splice(2,1);
console.log(thatNumberIRemoved);



////////////WHATS IN YOUR CLOSET//////////////
var annasCloset = ["left shoe", "cowboy boots", "right sock", "GA hoodie",
"green pants", "yellow knit hat", "marshmallow peeps"];

var sungsCloset = {
  shirts: ["lavender button-up", "dark purple button-up", 
  "light purple button-up", "mauve button-up",] ,
  pants: ["dress slacks", "jeans", "PJs"],
  accessories: ["silk ascot", "striped tie", "driving gloves"]
};

//What's Anna wearing today? 
//Using bracket notation to access items in annasCloset, 
//log the sentence "Anna is rocking that " + the third 
//item in Anna's closet + " today!" to the console.
console.log("Anna is rocking that " + annasCloset[2] + " today!");

//Anna can't find her left shoe. Remove this item 
//from her closet and save it to a variable named annaShoe.
var annaShoe = annasCloset.shift();

//Anna just bought some sweet shades! 
//Add "raybans" to her closet after "yellow knit hat".
annasCloset.splice(5, 0, "raybans");

//Anna spilled coffee on her hat... 
//modify this item to read "stained knit hat" instead of yellow.
annasCloset[4] = "stained knit hat";

//Time to do laundry - loop through Anna's closet and log the 
//sentence "WHIRR: Now washing (item)" for each item in the array.
for (var i = 0; i < annasCloset.length; i++) {
	console.log("WHIRR: Now washing " + annasCloset[i]);
}

//Sung wants to do inventory on his closet. Using dot notation, 
//log the arrays containing all of Sung's shirts, pants, and accessories.
console.log(sungsCloset.shirts + "\n" + sungsCloset.pants + "\n" + sungsCloset.accessories);

//Using both dot notation and bracket notation, access the first element in Sung's shirts array.
console.log(sungsCloset.shirts[0]);

// In the same way, access one item from Sung's pants array 
// and one from his accessories array and log a sentence about 
// what Sung's wearing. Example:
// "Sung is looking fierce in a lavender 
// button-up, dress slacks and a silk ascot."
function todaySungWears(x, y, z){
 	return "Sung is looking fierce in a " + sungsCloset.shirts[x] + ", "
	+ sungsCloset.pants[y] + " and " + sungsCloset.accessories[z];
	};

todaySungWears(1, 2, 1);

//Modify your code to put together 3 separate outfits. Mix and match!
todaySungWears(1, 0, 1);
todaySungWears(0, 0, 0);
todaySungWears(0, 1, 2);

// Anna's left shoe has traveled through time and space and turned up in 
// Sung's accessories drawer! 
// Remember the variable we saved Anna's 
// shoe to earlier on? Use that to add Anna's 
// lost shoe to Sung's accessories array.
sungsCloset.accessories.push(annaShoe);
console.log(sungsCloset);

//Get more specific about what kind of PJs Sung's wearing this winter. 
//Modify the name of his PJ pants to Footie Pajamas.
sungsCloset.pants[2] = 'Footie Pijamas';
console.log(sungsCloset);

//////////////////////////CALIFORNIA DREAMING///////////////////////

var theGoods = [
  "dreamy silk kaftan",
  "jade plant",
  "desert cactus",
  "embroidered kaftan",
  "bejeweled kaftan",
  "hens-and-chicks",
  "super expensive kaftan",
  "succulent echeveria paul bunyan"
];

// Create a new object that will represent Phil's store and save it to a sensibly-named variable. Your object should have the following properties:
// storeName - string
// address - string
// proprietor - string
// isOpen - boolean
// kaftans - empty array
// succulents - empty array
var philStore = {
	storeName: 'Phils',
	address: '12 w 21st',
	proprietor: 'someone',
	isOpen: false,
	kaftans: [],
	succulents: []
};

//Let's get organized! Move all of the items from theGoods into either the kaftans or the 
//succulents array, depending on where they belong.
	for (var i=0; i < theGoods.length; i++){
		if (theGoods[i].indexOf('kaftan') !== -1)	{
    		philStore.kaftans[i] = theGoods[i];
		}
	}

// I commented this due to the piece of code I created after for 
//the next exercise, but still, here the code would be:
//
// 	for (var i=0; i < theGoods.length; i++){
// 		if (theGoods[i].indexOf('succulent') !== -1){
//     		philStore.succulents[i] = theGoods[i];
// 		}
// 	}


//Write code that will print out an numbered 
//inventory list for each section.
var number = 1;

for(var a=0; a < theGoods.length; a++){	
	if(theGoods[a].indexOf('kaftan') === -1){
		philStore.succulents.push((number++) + ' ' + theGoods[a]);
	}
}

console.log(philStore);

//THERE'S BEEN A TRAGIC FIRE! Write code to loop through every 
//item in the kaftan array and rename each to "charred ash pile".
for (var n = 0; n < philStore.kaftans.length; n++){
	philStore.kaftans[n] = 'charred ash pile';
}

// After this unfortunate turn of events, 
// Phil has decided to begin selling handmade artisanal soaps instead. 
// Add a handmadeSoaps array to your store. 
// This array should contain four nested arrays 
// with the following elements:
// name of soap
// price
// scent
philStore['handmadeSoaps'] = [['ga crush', 'phils special', 'favorite of the season', 'pumpkin everything'], 
[12, 45, 21, 50], 
['roses', 'array smell', 'chocolate', 'pumpkin obviously']];



//Write code to loop through your handmadeSoaps 
// array and log each nested array to the console. 
for(var z = 0; z < philStore.handmadeSoaps.length; z++){
	console.log(philStore.handmadeSoaps[z]);
}

// Once you've got that working, modify your code so that 
// it prints out a numbered list of each soap, its scent, and its price.
// Example:
// 1. Seaside Dream, lavender scented: $14
function philSoaps(arrayindex){
	var y = 1;
 	return y++ + '. ' + philStore.handmadeSoaps[0][arrayindex] + ' soap, ' 
 	+ philStore.handmadeSoaps[2][arrayindex] + ' scented, $' 
 	+ philStore.handmadeSoaps[1][arrayindex];
}

philSoaps(1);

//Time for some exploration! Research how to get a random 
// number between 1 and 10 using Math.random. 
// (Hint: The MDN docs for the Math library are exhaustive, 
// 	but might be a bit confusing to a beginner - 
// 	feel free to expand your search!)
// Your goal: Write code that grabs a random element out of your 
// grabBag array (back in step 1) and logs it to the console! 
// Every time you reload your page, a different element should be logged.
var randomValue = grabBag[Math.floor(grabBag.length * Math.random())];
randomValue;


