// <label for="firstValue secondValue">Icalculate</label>
// <input id="firstValue">
// <input id="operator" placeholder="   + ,   -   or  *   ">
// <input id="secondValue">
// <button id="calculatorButton">Calculate It</button>

// <h1 id="result">
// </h1>


var firstValueBox = document.getElementById('firstValue');
var secondValueBox = document.getElementById('secondValue');
var operatorBoxInputer = document.getElementById('operator');
var calculatorButtonId = document.getElementById('calculatorButton')

function letsCalculateSomeIntegers(){
	var valueofFirstInput = firstValueBox.value;
	var valueofSecondInput = secondValueBox.value;
	var valueofOperatorInputer = operatorBoxInputer.value;
	var additionOfInputs = parseInt(valueofFirstInput) + parseInt(valueofSecondInput);
	var subtractOfInputs = parseInt(valueofFirstInput) - parseInt(valueofSecondInput);
	var multiplyInputs = parseInt(valueofFirstInput) * parseInt(valueofSecondInput);
	var resultOfMyCalculation = document.createElement('p');
	var whereResultGoesOnMyHtml = document.getElementById('result');

		if (valueofOperatorInputer === '+'){
			resultOfMyCalculation.textContent = "Your result is " + additionOfInputs;
			whereResultGoesOnMyHtml.appendChild(resultOfMyCalculation);
		} else if (valueofOperatorInputer === '-'){
			resultOfMyCalculation.textContent = "Your result is " + subtractOfInputs;
			whereResultGoesOnMyHtml.appendChild(resultOfMyCalculation);
		} else if (valueofOperatorInputer === '*'){
			resultOfMyCalculation.textContent = "Your result is " + multiplyInputs;
			whereResultGoesOnMyHtml.appendChild(resultOfMyCalculation);
		} else {
			resultOfMyCalculation.textContent = "This is not a valid operation. Please choose between Addition, Subtraction or Multiplication: + / - / *"
			whereResultGoesOnMyHtml.appendChild(resultOfMyCalculation);
		}
}

calculatorButtonId.addEventListener('click', letsCalculateSomeIntegers); 