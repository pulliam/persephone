angular.module('SampleApp').controller('DogsController', DogsController)

DogsController.$inject = ['$http'];

function DogsController($http){
<<<<<<< HEAD
	var dogs = this;

	dogs.add = function(){
		console.log('clicked', dogs.new);
		var dog = {name: dogs.new};
		//dogs.new is getting the info from the ng-model with the same name
		$http
		.post('/dogs', dog)
		//this part will render the data without needing to reload the page, so not only in the database:
		.then(function(response){
			console.log(response.data);
			dogs.all.push(dog);
		})
	}

	dogs.fetch = function(){
		$http
		.get('/dogs')
		.then(function(response){
			dogs.all = response.data;
		})
	}

	dogs.fetch();
=======
    var dogs = this;

    dogs.all = [];

    dogs.add = function(){
      console.log('clicked', dogs.new);
      var dog = {name: dogs.new};
      $http
        .post('/dogs', dog)
        .then(function(response){
          console.log(response.data);
          dogs.all.push(dog);
        })
      dogs.new = "";
    }

    dogs.fetch = function(){
      $http
        .get('/dogs')
        .then(function(response){
          dogs.all = response.data;
      })
    }

    dogs.fetch();
>>>>>>> c746cc50c4d66b6ae3dae8445636b24693fa0cf1
}
