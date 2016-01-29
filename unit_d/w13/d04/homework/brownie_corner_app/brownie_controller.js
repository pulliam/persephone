angular.module('BrownieCornerApp').controller('BrownieController', BrownieController);

function BrownieController(){
  this.brownies = [
  {
    "type": 'turtle',
    "isReady": true,
    "isBaking": false,
    "isEaten": false,
    "isSpecial": true
  },
  {
    "type": 'double chocolate',
    "isReady": false,
    "isBaking": false,
    "isEaten": false,
    "isSpecial": false
  },
  {
    "type": 'fudge',
    "isReady": true,
    "isBaking": false,
    "isEaten": false,
    "isSpecial": true
  },
  {
    "type": 'black and white',
    "isReady": false,
    "isBaking": false,
    "isEaten": true,
    "isSpecial": false
  }]
}
