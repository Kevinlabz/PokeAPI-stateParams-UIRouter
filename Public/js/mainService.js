angular.module("poke").service('mainService', function($http){

  //http://pokeapi.co/api/v2/pokemon/
  //pokemon/id can take either the name of the pokemon or the id as its parmeter
  this.getPokemon = function (id) {
    console.log('atempting');
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + id
    }).then(function(response) {
      return response.data
    })
  }

  //http://pokeapi.co/api/v2/type/
  this.getType = function (type) {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/type/' + type
    }).then(function(response) {
      return response.data
    })
  }
});
