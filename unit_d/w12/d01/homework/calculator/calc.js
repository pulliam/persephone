var calculator = require('./module_calc.js');

var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operator = process.argv[3];

var answer;

if (operator === '+'){
	calculator.add(num1, num2);
} else if (operator === '-'){
	calculator.subtract(num1, num2);
} else if (operator === '/'){
	calculator.divide(num1, num2);
} else if (operator === 'x'){
	calculator.multiply(num1, num2);
} else {
	console.log('Not Valid');
}