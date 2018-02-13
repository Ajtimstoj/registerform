'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      css: 'register/register.css',
      controller: 'RegisterController'
  });
}])

.controller('RegisterController', ['$scope', function($scope) {
    $scope.master = {};
    $scope.register = function(user) {
        $scope.master = angular.copy(user);
    };
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();



    //Input from datepicker ng-model="dateString"
    $scope.$watch('dateString',
        function (dateString){
            $scope.birthdate = new Date(dateString);
            console.log('B', $scope.date, $scope.dateString);
        });



    //IndexedDB
    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');}
    else {
        console.log('IndexedDB support!');}

}])

.filter('ageFilter',
    function() {
        function calculateAge(birthday) { // birthday is a date
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        return function(birthdate) {
            return calculateAge(birthdate);
        };
    });

