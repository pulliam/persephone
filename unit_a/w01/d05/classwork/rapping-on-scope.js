// Let's RAP about scope!

// Read, Analyze and Predict what happens in the following code!


var mrSmalls = 'Biggie';

var notorize = function(rapper) {
  rapper = 'Notorious B.I.G';
  return rapper;
}

notorize(mrSmalls);

// What should the current value of mrSmalls be?
//>>>>>>>> 'Biggie'

var tycoon = {name: 'Sean Combs'};

var moMoney = function(rapper) {

  rapper.name = 'Puff Daddy'; 
  return rapper;

}

moMoney(tycoon);

// What should the current value of tycoon be?
// >>> var tycoon = {name: 'Sean Combs'};

// What's different about the two functions?
// >> one uses a string and other uses an object

/////////////////////////////////////////////////////////////////////////////////////////////

var bestVideoOfAllTime = 'Taylor Swift';

var immaLetYouFinish = function(){
  var bestVideoOfAllTime = 'Beyonce';
  return bestVideoOfAllTime;
}

immaLetYouFinish();

// What should the current value of bestVideoOfAllTime be?
// >>>> 'Taylor Swift'

var deepDownWeAllKnow = function() {
  bestVideoOfAllTime = 'Beyonce';
  return bestVideoOfAllTime;
}

deepDownWeAllKnow();

// What should the current value of bestVideoOfAllTime? 'Beyonce'
// What is different about the two functions above? the first one creates a new variable inside the function "scoop" which 
//doen't hava a relation with the variable outside this scoop. Its like two differen worlds. Its like: there is a Thais 
//inside this class, not related to the anu other thais that exists in the world. It only works like this though if 
//Im DECLARING a new variable inside the scoop (var = ) otherwise Im just using the outside the scoop variable (like the second 
  //exemple. And in the rapper ones above, It didnt re-assign because it was not using the same name, It was creating a completly
  //NEW variable with the same value (output) of the one outside. but they are still 2 different variables.)

/////////////////////////////////////////////////////////////////////////////////////////////


var addMember = function(member){
  var sugarHillGang = ['Wonder Mike', 'Master Gee'];
  sugarHillGang.push(member);
  return sugarHillGang;
}

addMember('Big Bank Hank');

// What's the current value and length of sugarHillGang? 
// >>>>> Inside the local SCOOP (inside the function, It became ['Wonder Mike', 'Master Gee' , 'Big Bang Hank']) 
//BUT!!!!!!! In the global scoop (outside the function) Its just a NOT DEFINED variable!!!! 

/////////////////////////////////////////////////////////////////////////////////////////////

// Two Chains always pops up in songs to yell out "TWO CHAINS!"
// Can you write a function called "twoChainify" that takes a string and inserts
// "TWO CHAINS!" somewhere randomly in the string?


var twoChainify = function(string) {
    var i = Math.round((Math.random()*string.length));
    var string1 = string.slice(0,i);
    var string2 = string.slice(i,string.length);
    var newString = string1 + " TWO CHAINS!! " + string2;
    console.log(newString)
}

///OR!!!!!

var twoChainify = function(string) {
    var i = Math.round((Math.random()*string.length));
    var string1 = string.substring(0,i);
    var string2 = string.substring(i,string.length);
    var newString = string1 + " TWO CHAINS!! " + string2;
    console.log(newString)
}
twoChainify('TEST');


/////////////////////////////////////////////////////////////////////////////////////////////


// Mind Bending Portion
//

function fugees(){
    var members = [
           'Lauryn Hill',
           'Wyclef Jean',
           'Pras Michel'
                  ];
    function soloCareer(){
            return members.pop();
    }
  return soloCareer;
}

//Fugees return a variable called members that is an array. And also returns another function that will remove Pras Michel 
//form the members array.
//then finaly, will return the result of that. (soloCareer function)

var solo = fugees();

// What does fugees return?
// >>>>>>>>  fugees returns 'Pras Michel' because It poped it. (removed the last item in array and poped into console)

solo();

// What does solo return?
//>>>>>>>>  solo is a variabe for fugees(); so returns 'Pras Michel'

// Where can you access the variable members?
//you can't because they are inside a scoop. (not in the global scoop)
