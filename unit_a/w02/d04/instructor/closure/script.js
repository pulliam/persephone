
x = 111;

var makeAddFunction = function(x){
  return function(y){
    return x + y;
  };
};

makeAddFunction(3)(5);

// 1st baby function
var addByThree  = makeAddFunction(3);
addByThree(5) // 8

// Second baby function
var addByHundred = makeAddFunction(100);
addByHundred(200) //300

