'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Controller'
  });
}])

.controller('View2Controller', function($scope, $indexedDB) {
    $scope.objects = [];

    $indexedDB.openStore('people', function(store){

        store.insert({"ssn": "444-444-222-111","name": "John Doe", "age": 57}).then(function(e){});

        store.getAll().then(function(people) {
            // Update scope
            $scope.objects = people;
        });
    });
});