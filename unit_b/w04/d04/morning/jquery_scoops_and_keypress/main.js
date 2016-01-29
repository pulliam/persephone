// html Ids anc Classes:
// <input type="text" id="content" placeholder="message">
// <input type="text" id="user-name" placeholder="username">
// <button>Send</button>
// <ul id="all-messages">
	var $button;
	var $messagesLog;
	var $inputMessageBox;
	var $inputUserNameBox;
	var username;
	var message;
	var $clean;

jQuery(document).ready(function(){
	$button = $('button');
	$messagesLog = $('ul');
	$inputMessageBox = $('#content');
	$inputUserNameBox = $('#user-name');
	$inputMessageBox.focus();


	$('body').keypress(function(e){
		if (e.which === 13){
			username = $inputUserNameBox.val();
			message = $inputMessageBox.val();
			var $newLine = $('<li class="new-message">').append(username + " says: '" + message +"'").appendTo($messagesLog);
			$inputUserNameBox.val('');
			$inputMessageBox.val('');
		}
	});

	$clean = $('#clean');
	$clean.on('change', function(){
		var banned = ['hello', 'bye', 'good morning'];
		$('li').each(function(){
				for (var i = 0; i < banned.length; i++) {
				$(this).text().replace(banned[i], '*****'); 
				}
		})
	})


});