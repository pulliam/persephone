function breakCode(trial) {     //Firstly a function with 1 parameter is created
    var code = "cupcakesrock";  //Then a inside de scoop variable is declared containing the "code"
    var newString = "";    //Another variable is declared as an empty string. It will be used to log in comentaries for wrong code input.
    if (trial.length !== 12){   // The If statement asks if the lenght of the input at the function parameter is different then 12. "If yes," will run the code
		console.log("oh oh, you need 12 characters"); //That logs in the consolde that the input had wrong syntax
	} else { // Otherwise, run this code:
		for (var i=0; i < code.length; i++){ //for loop: var i is stated as zero, and while i is less then de length of "code", for every i of the var code, run this (which means, scan through all substrings)
			if (code[i] ==  trial[i]) { //If the i (substring in this case) of code equals the inputed by the function (trial), this code will run:
                newString += code[i]; //variable newString is re-assign to it's old value + the substring of code i (the one being runned at the moment at for loop)
            } else { //Otherwise, this code will run:
                newString += "*"; //var newString is re assign to it's old most current value plus "*", so for ex. if newString is an empty string, now will be '*', and if the loop run again in the else, will be '*'' + '*'' = '**' .....
            } //close else
        } //close the for loop
    } //close the else of the first "if" statement
     if (code == newString) { //Now, After that, if is one more time used. This time, if now code equals the newString variable, 
        console.log("Congratulation, you have open the vault."); //this code will run, logging the message into the console.
    } else { //otherwise, the code bellow will be runned:
        console.log("You code " + newString + " is wrong. Try again."); //saying that the trial was wrong. But showing the newString that should contain the substrings that were gotten right, and the wrong ones as "*"
    }
    
}
/*  example: */  breakCode('cupcakessuck');

