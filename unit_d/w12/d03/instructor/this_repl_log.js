var tellMeWhatThisIs = function() { console.log(this) }
tellMeWhatThisIs()
var mysteriousBox = {
contents: 'MYSTERY'
}
mysteriousBox.tellMeWhatThisIs = tellMeWhatThisIs
mysteriousBox.tellMeWhatThisIs()
mysteriousBox
var boundToTheBox = tellMeWhatThisIs.bind(mysteriousBox)
boundToTheBox()
tellMeWhatThisIs
var jess = {
name: 'Jess',
glasses: true
}
jess.boundToTheBox = boundToTheBox
jess.boundToTheBox();
var sung = {name: 'Sung CHOYYYY', ascotLevel: 10000}
var tellMeWhatThisIs = function(){console.log(this)}
var box = {name: 'I\'m a box'}
var boundToBox = tellMeWhatThisIs.bind(box)
boundToBox()
var boundToSungPossibly = boundToBox.bind(sung)
boundToSungPossibly()