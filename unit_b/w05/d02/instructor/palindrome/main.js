// .ready() takes a function as an argument (CALLBAAACK)
//
$(document).ready(function() {
  var $btn = $('button');
  var $input = $('input');

  $btn.on('click', function() {
    var userInput = $input.val();
    var reversedInput = userInput.toLowerCase().split('').reverse().join('');
    // Fun post talking about different ways to reverse a string: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
    if (userInput.toLowerCase() === reversedInput) {
      console.log('match');
      var result = $('<p>').text(userInput + ' is a palindrome!');
      $('body').append(result);
    } else {
      console.log('nar');
      var result = $('<p>').html(userInput + ' is <strong>not</strong> a palindrome!');
      $('body').append(result);
    }
  });
});