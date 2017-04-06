angular.module("poke").controller('homeCtrl', function($scope, mainService) {
  //721
  $scope.pokemonList = [];

$scope.getRandomPokemon = function() {
  for (var i = 0; i < 9; i++) {
    mainService.getPokemon(Math.floor((Math.random() * 721) + 1)).then(function(response) {$scope.pokemonList.push(response)})
  }
}

  $scope.getRandomPokemon();
});
