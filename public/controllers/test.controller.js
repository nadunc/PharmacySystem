pharmacyApp.controller('TestController', ['$scope', '$route', '$http', function ($scope, $route, $http) {
    //$scope.message = "Test 1";
    $scope.myRoute = $route;
    $scope.lol = [{"id": "1"}, {"id": "2"}];


    // $scope.users = function(){
    //     return $http({
    //         method: "GET",
    //         url: "/users"
    //     }).then(function (res) {
    //         return callback(res.data);
    //     });
    // }

    $http({
        method: "GET",
        url: "/users"
    }).then(function (res) {
        $scope.users = res.data;
        console.log(res.data);
    });


}]);