/// before the page is loaded, do other stuff

  // do this stuff once the page is loaded!!!
$(document).ready(function() {
  // grab user input from my input element when the button is clicked
    // how do we recognize when the button is clicked?
    // How do we get text from the input box?
    // EVENT LISTENER
    // var button = document.querySelector('#submit-name');
    $button = $('#submit-name')
    func1 = function() {
      console.log("I am the first and the worst");
    };
    func2 = function() {
      console.log("I am the second and a kitten");
    };

    $button.on('click', func1);
    $button.on('click', func2);
    // $button.one('click', function() {
    //   console.log("I was clicked.");
    // })
  // append that information to my "Least favorite kittens" list
});
