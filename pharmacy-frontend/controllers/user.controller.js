pharmacyApp.controller('UserController', ['$scope', '$route', '$http', 'UserService', function ($scope, $route, $http, UserService) {
    //$scope.message = "Test 1";
    $scope.myRoute = $route;
    $scope.lol = [{"id": "1"}, {"id": "2"}];


    function getUsers() {
        UserService.get().then(users => {
            $scope.users = users;
        })
    }

    getUsers();

    $scope.addUser = (user) => {
        UserService.add(user).then(() => {
            getUsers();
            user = {};
        });
    };
}]);