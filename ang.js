var chatApp = angular.module('chatApp', []);
chatApp.controller('mainCtrl', function($scope, $http) {
    $scope.three = 3;
    $scope.users = ["one", "two", "three"];
});

chatApp.directive('userDisplay', function() {
   return {
       scope: {
           user: "="
       },
       restrict: "E",
        templateUrl: "userDisplay.html"
   };
});