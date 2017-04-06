angular.module("poke").controller('pokemonCtrl', function($scope, mainService, $stateParams) {

  $scope.pokemon = {};

$scope.getPokemon = function(id) {
  //have this function run the getPokemon function on your service then save the result to $scope.pokemon
}

//this executes the get pokemon function. pass in the $stateParams of id to this function so the $http reqeust knows what one to get
$scope.getPokemon();

});
