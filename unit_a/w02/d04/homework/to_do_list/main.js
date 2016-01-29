var inputBox = document.getElementById('textInputId');
var buttonBox = document.getElementById('buttonToDoId');

function letsGetThisTaskDone (element){
	element.target.classList.add('marked-as-done');
}

function addNewTaskToList (event){
	if(event.keyCode === 13){		
	var listOfTasks = document.getElementById('orderedListId');
	var valueOfInputBox = inputBox.value;
	var newTaskJustAdded = document.createElement('li');
	newTaskJustAdded.addEventListener('click', letsGetThisTaskDone);
	newTaskJustAdded.textContent = valueOfInputBox;
	listOfTasks.appendChild(newTaskJustAdded);

	var newEditListButton = document.createElement('input');
	newEditListButton.setAttribute('placeholder', 'Edit your list item here')
	newEditListButton.addEventListener('keypress', function(){
	newTaskJustAdded.textContent = newEditListButton.value;
	})
	listOfTasks.appendChild(newEditListButton);
	}
}

document.addEventListener('keypress', addNewTaskToList);





