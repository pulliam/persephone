var $chatBox = $('#chat-box');
var $chatTyping = $('#chat-typing');

// <p class="chat-line">
//   <span class="chat-name">Bot:</span><span class="chat-msg">Hi!</span>
// </p>
var $chatLine = $('<p class="chat-line">');
var $nameSpan = $('<span class="chat-name">');
var $chatMsg = $('<span class="chat-msg">');

$nameSpan.text("Bot");
$chatMsg.text("Hey girl");
$chatLine.append($nameSpan);
$chatLine.append($chatMsg);

$chatBox.append($chatLine);
