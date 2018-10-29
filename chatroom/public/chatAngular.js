var chatApp = angular.module('chatApp', []);
chatApp.controller('chatCtrl', function($scope, $http) {
    $scope.three = 3;
   // $scope.time="9:00 am";
   $scope.messageContent = "";
    $scope.messages = [
    {
        content: "Message 1",
        time: "9:00 am"
    },
    {
        content: "Message 2",
        time: "10:30 am"
    }
    ];
    
    $scope.addMessage = function($event) {
        $scope.messages.push({
            content: $scope.messageContent,
            time: "2:26pm"
        })
    }
});

chatApp.directive('chatMessage', function() {
   return {
       scope: {
           message: "="
       },
       restrict: "E",
       templateUrl: "chatMessage.html"
   } 
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