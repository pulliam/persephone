console.log('I\'m in the galatic namespace');

var protagonist = 'Luke Skywalker';
var here = 'Galaxy, Far, Far Away';
var refreshments = 'Caf';
var droid = 'R2D2';

var theRabbitHole = function(){
  console.log('I\'ve gone down the rabbit hole.');

  protagonist = 'Alice';
  here = 'Tea Party';
  refreshments = 'Tea';
  host = 'Mad Hatter';

  var inception = function() {
    console.log('Am I dreaming?');

    var protagonist = 'Dreamer';
    var here = 'Mountain Fortress';
    var refreshments = 'cafe';
    var song = 'Non, je ne regrette rien';
    var heatLevel = -1;

    var inferno = function() {
      console.log('What the inferno');

      var protagonist = 'Dante';
      var here = 'Hell';
      var refreshments = null;
      var guide = 'Virgil';
      var heatLevel = Infinity;

      console.log('protagonist:', protagonist === 'Dante');
      console.log('here:', here === 'Hell');
      console.log('refreshments:', refreshments === null);
      console.log('droid:', droid === 'R2D2');
      console.log('host:', host === 'Mad Hatter');
      console.log('song:', song === 'Non, je ne regrette rien');
      console.log('guide:', guide === 'Virgil');
      console.log('heatLevel:', heatLevel === Infinity);
      // console.log('tragic:', tragic === undefined);
    };

    var hades = function() {
      console.log('No way in Hades');

      var protagonist = 'Persephone';
      var here = 'The Other Hell';
      var refreshments = 'Pomegranates';
      var tragic = true;

      console.log('protagonist:', protagonist === 'Persephone');
      console.log('here:', here === 'The Other Hell');
      console.log('refreshments:', refreshments === 'Pomegranates');
      console.log('droid:', droid === 'R2D2');
      console.log('host:', host === 'Mad Hatter');
      console.log('song:', song === 'Non, je ne regrette rien');
      // console.log('guide:', guide === undefined);
      // console.log('heatLevel:', heatLevel === undefined);
      console.log('tragic:', tragic === true);

    };

    console.log('protagonist:', protagonist === 'Dreamer');
    console.log('here:', here === 'Mountain Fortress');
    console.log('refreshments:', refreshments === 'cafe');
    console.log('droid:', droid === 'R2D2');
    console.log('host:', host === 'Mad Hatter');
    console.log('song:', song === 'Non, je ne regrette rien');
    // console.log('guide:', guide === undefined);
    // console.log('heatLevel:', heatLevel === undefined);
    // console.log('tragic:', tragic === undefined);

    inferno();
    hades();
  };

    console.log('protagonist:', protagonist === 'Alice');
    console.log('here:', here === 'Tea Party');
    console.log('refreshments:', refreshments === 'Tea');
    console.log('droid:', droid === 'R2D2');
    console.log('host:', host === 'Mad Hatter');
    // console.log('song:', song === undefined);
    // console.log('guide:', guide === undefined);
    // console.log('heatLevel:', heatLevel === undefined);
    // console.log('tragic:', tragic === undefined);
    inception();
};




console.log('protagonist:', protagonist === 'Luke Skywalker');
console.log('here:', here === 'Galaxy, Far, Far Away');
console.log('refreshments:', refreshments === 'Caf');
console.log('droid:', droid === 'R2D2');
// console.log('host:', host === undefined);
// console.log('song:', song === undefined);
// console.log('guide:', guide === undefined);
// console.log('heatLevel:', heatLevel === undefined);
// console.log('tragic:', tragic === undefined);

theRabbitHole();



console.log('protagonist:', protagonist === 'Luke Skywalker');
console.log('here:', here === 'Galaxy, Far, Far Away');
console.log('refreshments:', refreshments === 'Caf');
console.log('droid:', droid === 'R2D2');
