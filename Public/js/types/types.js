angular.module("poke").controller('typeCtrl', function($scope, mainService, $stateParams) {

  $scope.type = {};

$scope.getType = function(type) {
    mainService.getType(type).then(function(response) {
      $scope.type = response
    })
}

$scope.getType($stateParams.type);

});
