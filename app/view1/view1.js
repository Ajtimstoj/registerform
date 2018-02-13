'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Controller'
  });
}])

.controller('View1Controller', function($scope, dateFilter) {

    //Current time and date
    $scope.date = new Date();
    $scope.$watch('date',
        function (date){
            $scope.dateString = dateFilter(date, 'yyyy-MM-dd');
            console.log('A', $scope.date, $scope.dateString);
            });

    //Input from datepicker ng-model="dateString"
    $scope.$watch('dateString',
        function (dateString){
            $scope.birthdate = new Date(dateString);
            console.log('B', $scope.date, $scope.dateString);
            });

})

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