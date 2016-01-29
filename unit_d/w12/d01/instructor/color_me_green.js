var chalk = require('chalk');

var args = process.argv.slice(2, process.argv.length); 
console.log(chalk.green(args.join(' ')));
