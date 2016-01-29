angular.module('AfternoonApp').controller('TodoController', TodoController);

function TodoController() {
	// this.todoarray = ["Hello Person", "Hello Word", "Hello Peeps"];
	this.todoarray = [
	{firstkey: "Hello Person", secondkey: "Bye Person"},
	{firstkey: "Hello Word", secondkey: "Bye Word"},
	{firstkey: "Hello Peeps", secondkey: "Bye Peeps"}
	];

	this.alert = function(msg){
		window.alert(msg);
	}

	this.add = function(task, task2){
		this.todoarray.push({firstkey: task, secondkey: task2});
	}
}
