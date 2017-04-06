angular.module("poke").controller('pokemonCtrl', function($scope, mainService, $stateParams) {

  $scope.pokemon = {};

$scope.getPokemon = function(id) {
    mainService.getPokemon(id).then(function(response) {
      console.log(response);
      $scope.pokemon = response
    })
}

  $scope.getPokemon($stateParams.id);

});
