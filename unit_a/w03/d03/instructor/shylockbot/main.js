// declare global variables first
var $log;
var $prompt;

// group all the shylock related code in an object
var shylock = {
  purse: 100000,
  process: function(input) {
    if (input === 'purse') {
      logOutput( 'Shylock opens his purse', 'action');
      logOutput( 'I have ' + shylock.purse + ' ducats', 'quote');
    } else {
      logOutput('I\'m confused', 'quote');
    }
  }
};

// output is a message and class ('command', 'action', or 'quote')
var logOutput = function(message, type) {
  // create an LI
  var $output = $('<li>');
  // set the text of the LI
  $output.text(message);
  // set the class of the LI
  $output.addClass(type);
  // append to #log
  $log.append($output);
}

// The event listener for input
var handleInput = function(event){
  // when we hit return
  if (event.which === 13) {
    // get the value from the input
    var input = $prompt.val();
    // print the user input
    logOutput(input, 'command');
    // give it to shylock to process
    shylock.process(input);
  }
}

// once the document has loaded
$(document).ready(function(){
  // select #log and #prompt
  $prompt = $('#prompt');
  $log = $('#log');
  // put an event listener on the prompt
  $prompt.on('keypress', handleInput);
});
