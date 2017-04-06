angular.module("poke").controller('homeCtrl', function($scope, mainService) {
  //721
  $scope.pokemonList = [];

$scope.getRandomPokemon = function() {
  //Math.floor((Math.random() * 721) + 1)
  //the above JS will get a random number between 1 and 721, since the pokemon api only has 721 pokemon.
  //have this function loop 9 times and get a random pokemonn each time and push it onto   $scope.pokemonList = [];
}
  //this will run the get random pokemon function and push each poekmon to an array. this needs no parmeters
  $scope.getRandomPokemon();
});
