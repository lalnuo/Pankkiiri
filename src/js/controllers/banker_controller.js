angular.module('banker').
controller('BankerCtrl', function($scope) {
  $scope.readFile = function(text) {
    console.log(text);
  }
});
