/* 
 * Replace all the ...s with what you think they point to.
 * Comment out the console.logs for variables that you believe
 * are undefined.
 *
 * If your code is running without errors and returning all true,
 * uncomment the console.logs that you believe represent undefined
 * values and recomment them after you have confirmed that it
 * is undefined via the error that is thrown.
 * 
 * If no error is thrown, the value is not undefined.
 * Try again to find the correct value.
 */


console.log('I\'m in the galatic namespace');

<<<<<<< HEAD
var protagonist = 'Luke Skywalker'; //GLOBAL
var here = 'Galaxy, Far, Far Away'; //GLOBAL
var refreshments = 'Caf';
var droid = 'R2D2'; //GLOBAL


//RABIT HOLE has access to: global. 
var theRabbitHole = function(){ 
=======
var protagonist = 'Luke Skywalker';
var here = 'Galaxy, Far, Far Away';
var refreshments = 'Caf';
var droid = 'R2D2';

var theRabbitHole = function(){
>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22
  console.log('I\'ve gone down the rabbit hole.');

  var protagonist = 'Alice';
  var here = 'Tea Party';
  var refreshments = 'Tea';
  var host = 'Mad Hatter';

<<<<<<< HEAD
  //INCEPTION has access to: rabbit hole and global
  var inception = function() {  
    console.log('Am I dreaming?');

    var protagonist = 'Dreamer'; 
=======
  var inception = function() {
    console.log('Am I dreaming?');

    var protagonist = 'Dreamer';
>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22
    var here = 'Mountain Fortress';
    var refreshments = 'cafe';
    var song = 'Non, je ne regrette rien';
    var heatLevel = -1;

<<<<<<< HEAD
    //INFERNO has access to: inception and rabbit hole and global
=======
>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22
    var inferno = function() {
      console.log('What the inferno');

      var protagonist = 'Dante';
      var here = 'Hell';
      var refreshments = null;
      var guide = 'Virgil';
      var heatLevel = Infinity;

<<<<<<< HEAD
      console.log('protagonist:', protagonist === 'Dante');
      console.log('here:', here === 'Hell');
      console.log('refreshments:', refreshments === null);  
      console.log('droid:', droid === 'R2D2');
      console.log('host:', host === 'Mad Hatter');
      console.log('song:', song === 'Non, je ne regrette rien');
      console.log('guide:', guide === 'Virgil');
      console.log('heatLevel:', heatLevel === Infinity);
      // console.log('tragic:', tragic === ...);
    };
    //INFERNO -----------

    //HADES  has access to: inception and habbit hole and global
    var hades = function() {  
      console.log('No way in Hades');


      var protagonist = 'Persephone';  //INCEPTION LEXICAL OF INFERNO
=======
      console.log('protagonist:', protagonist === ...);
      console.log('here:', here === ...);
      console.log('refreshments:', refreshments === ...);
      console.log('droid:', droid === ...);
      console.log('host:', host === ...);
      console.log('song:', song === ...);
      console.log('guide:', guide === ...);
      console.log('heatLevel:', heatLevel === ...);
      console.log('tragic:', tragic === ...);
    };

    var hades = function() {
      console.log('No way in Hades');

      var protagonist = 'Persephone';
>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22
      var here = 'The Other Hell';
      var refreshments = 'Pomegranates';
      var tragic = true;

<<<<<<< HEAD

      console.log('protagonist:', protagonist === 'Persephone');
      console.log('here:', here === 'The Other Hell');
      console.log('refreshments:', refreshments === 'Pomegranates');
      console.log('droid:', droid === 'R2D2');
      console.log('host:', host === 'Mad Hatter');
      console.log('song:', song === 'Non, je ne regrette rien');
      // console.log('guide:', guide === ...);
      console.log('heatLevel:', heatLevel === -1);
      console.log('tragic:', tragic === true);
    };
    //HADES ------ 

    //has access to: rabbit hole and global
    console.log('protagonist:', protagonist === 'Dreamer');
    console.log('here:', here === 'Mountain Fortress');
    console.log('refreshments:', refreshments === 'cafe');
    console.log('droid:', droid === 'R2D2');
    console.log('host:', host === 'Mad Hatter');  //RABBIT HOLE 
    console.log('song:', song === 'Non, je ne regrette rien');
    // console.log('guide:', guide === ...);
    console.log('heatLevel:', heatLevel === -1);
    // console.log('tragic:', tragic === ...);

    inferno();
    hades();
  }; 
  //INCEPTION ------

    //has access to: global 
    console.log('protagonist:', protagonist === 'Alice');
    console.log('here:', here === 'Tea Party');
    console.log('refreshments:', refreshments === 'Tea');
    console.log('droid:', droid === 'R2D2');
    console.log('host:', host === 'Mad Hatter');
    // console.log('song:', song === ...);
    // console.log('guide:', guide === ...);
    // console.log('heatLevel:', heatLevel === ...);
    // console.log('tragic:', tragic === ...);

    inception();
}; 
//RABIT HOLE ---------- 


console.log('protagonist:', protagonist === 'Luke Skywalker');
console.log('here:', here === 'Galaxy, Far, Far Away');
console.log('refreshments:', refreshments === 'Caf');
console.log('droid:', droid === 'R2D2');

// console.log('host:', host === ...);
// console.log('song:', song === ...);
// console.log('guide:', guide === ...);
// console.log('heatLevel:', heatLevel === ...);
// console.log('tragic:', tragic === ...);
=======
      console.log('protagonist:', protagonist === ...);
      console.log('here:', here === ...);
      console.log('refreshments:', refreshments === ...);
      console.log('droid:', droid === ...);
      console.log('host:', host === ...);
      console.log('song:', song === ...);
      console.log('guide:', guide === ...);
      console.log('heatLevel:', heatLevel === ...);
      console.log('tragic:', tragic === ...);
    };

    console.log('protagonist:', protagonist === ...);
    console.log('here:', here === ...);
    console.log('refreshments:', refreshments === ...);
    console.log('droid:', droid === ...);
    console.log('host:', host === ...);
    console.log('song:', song === ...);
    console.log('guide:', guide === ...);
    console.log('heatLevel:', heatLevel === ...);
    console.log('tragic:', tragic === ...);

    inferno();
    hades();
  };

    console.log('protagonist:', protagonist === ...);
    console.log('here:', here === ...);
    console.log('refreshments:', refreshments === ...);
    console.log('droid:', droid === ...);
    console.log('host:', host === ...);
    console.log('song:', song === ...);
    console.log('guide:', guide === ...);
    console.log('heatLevel:', heatLevel === ...);
    console.log('tragic:', tragic === ...);

    inception();
};

console.log('protagonist:', protagonist === ...);
console.log('here:', here === ...);
console.log('refreshments:', refreshments === ...);
console.log('droid:', droid === ...);
console.log('host:', host === ...);
console.log('song:', song === ...);
console.log('guide:', guide === ...);
console.log('heatLevel:', heatLevel === ...);
console.log('tragic:', tragic === ...);
>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22

theRabbitHole();
