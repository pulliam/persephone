angular.module('UsermeApp').controller('UsersController', UsersController);

UsersController.$inject = ['$http'];

function UsersController($http) {
	var users = this;
	users.name = "Edith";
	users.all = []
	users.greet = function(){
		window.alert("Hello " + users.name);
	}
	users.fetch = function(){
		var url = "http://api.randomuser.me/"
		$http.get(url).then(function(response){
			console.log(response.data);
			users.all = response.data.results;
		})
  // 	$.ajax({
  //   		url: 'http://api.randomuser.me/',
  //   		type: 'GET',
  //   		dataType: 'json'
  // 	}).done(function(response){
  //  		console.log(response.results);
  //  		users.all = response.results[0];
		// })
	}
}
	