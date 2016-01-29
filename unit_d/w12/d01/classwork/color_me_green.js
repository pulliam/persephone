var chalk = require('chalk');

var argumentss = process.argv.slice(2, process.argv.length); //Since it's an entire string, we need to slice it, and say we 
// want from the second one to the end of it. 

console.log(chalk.green(argumentss.join(' ')));
// now we console.log with chalk green and join them with spaces. 




