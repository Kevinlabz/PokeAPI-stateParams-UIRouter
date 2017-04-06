angular.module("poke").controller('typeCtrl', function($scope, mainService, $stateParams) {

  $scope.type = {};

$scope.getType = function(type) {
  //have this function run the getType function on the service and pass it the type param so it know what type to get
  //save the result to $scope.type
}

//execute this function but have its argument be from $stateParams type. make sure to add the :type to the URL parmeter on the app.js
$scope.getType();

});
