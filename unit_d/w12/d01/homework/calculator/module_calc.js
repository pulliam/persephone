var calculator = {};

calculator.add = function(num1, num2) {
  console.log(num1 + num2);
};

calculator.subtract = function(num1, num2) {
  console.log(num1 - num2);
};

calculator.divide = function(num1, num2) {
  console.log(num1 / num2);
};

calculator.multiply = function(num1, num2) {
  console.log(num1 * num2);
};

module.exports = calculator;