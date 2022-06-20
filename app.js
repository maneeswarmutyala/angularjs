var app = angular.module('maneesh', []);

app.controller('justcontroller',['$scope', function($scope) {
    $scope.controllerName = 'Name from controller';
    $scope.fname =' fname';
    $scope.lname =' lname';
    $scope.fullname = function() {
        return $scope.fname+ " "+ $scope.lname;
    }
    $scope.coupon = 'MANEESH';
    $scope.showCoupon = true;
}]);