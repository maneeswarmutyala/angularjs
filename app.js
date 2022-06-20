var app = angular.module("maneesh", []);

app.controller("justcontroller", [
  "$scope",
  function ($scope) {
    $scope.controllerName = "Name from controller";
    $scope.fname = " fname";
    $scope.lname = " lname";
    $scope.fullname = function () {
      return $scope.fname + " " + $scope.lname;
    };
    $scope.coupon = "MANEESH";
    $scope.showCoupon = true;
    $scope.users = [
      {
        name: "maneesh",
        salary: 60000,
      },
      {
        name: "mani",
        salary: 20000,
      },
      {
        name: "esh",
        salary: 30000,
      },
      {
        name: "mansh",
        salary: 60000,
      },
    ];
    $scope.numbers = [{
        name : 'Ten',
        nums : 10
    },{
        name : 'One',
        nums : 1
    },{
        name : 'Five',
        nums : 5
    },
]
  },
  
]);
