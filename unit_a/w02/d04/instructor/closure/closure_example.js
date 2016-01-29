var showHelpText = function (helpText) {
  document.getElementById(helpText.id).setAttribute('placeholder', helpText.content);
};

var showHelpTextMommyFunction = function(helpText) {
  console.log('mommy is creating a baby function with a closure');

  var showHelpTextWithClosure = function(){
    console.log('helpTextObject:', helpText);
    showHelpText(helpText);
  };

  return showHelpTextWithClosure;
};

var setupHelp = function () {
  var helpTexts = [
      {'id': 'email', 'content': 'Your e-mail address'},
      {'id': 'name', 'content': 'Your full name'},
      {'id': 'age', 'content': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpTexts.length; i++) {
    var item = helpTexts[i];

    document.getElementById(item.id).addEventListener('focus', showHelpTextMommyFunction(item));
  }
};

setupHelp();
