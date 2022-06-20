var app = angular.module('maneesh', []);

app.controller('justcontroller',['$scope', function($scope) {
    $scope.controllerName = 'Name from controller';
}]);