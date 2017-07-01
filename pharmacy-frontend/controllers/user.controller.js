pharmacyApp.controller('UserController', ['$scope', '$route', '$http', 'UserService','$localStorage','$window', function ($scope, $route, $http, UserService, $localStorage, $window) {
    // //$scope.message = "Test 1";
    // $scope.myRoute = $route;
    // $scope.lol = [{"id": "1"}, {"id": "2"}];
    //
    //
    // function getUsers() {
    //     UserService.get().then(users => {
    //         $scope.users = users;
    //     })
    // }
    //
    // getUsers();
    //
    // $scope.addUser = (user) => {
    //     UserService.add(user).then(() => {
    //         getUsers();
    //         user = {};
    //     });
    // };




    $scope.$storage = $localStorage.$default({
        id: '',
        name: '',
        token: ''
    });
    $scope.isAuth = 'denied';

    $scope.login = function (credentials) {
        UserService.login(credentials).then(function (data) {

            if (data.state == 'success') {
                $scope.$storage.id = data.id;
                $scope.$storage.name = data.name;
                $scope.$storage.token = data.token;
                // alert("Logged in!");

                $window.location.href = 'index.html';

            } else {
                alert("Login Failed");
            }

        });
    };

    $scope.logout = function () {
        $scope.$storage.$reset();
        $window.location.href = 'login.html';
    };

    // checkAuth('{"id":"' + $scope.$storage.id + '", "token":"' + $scope.$storage.token + '"}');
    // checkAuth(angular.toJson($localStorage));

    function checkAuth(authData) {

        UserService.isAuth(authData).then(function (data) {
            $scope.isAuth = data;
            sendToLogin();

        });

        setTimeout(function(){

            if ($scope.isAuth != "auth") {
                if (document.getElementById('pagetitle').innerHTML != "Login") {
                    $window.location.href = 'login.html';
                }
            }
        }, 1000);
    }



    function sendToLogin() {
        if ($scope.isAuth != "auth") {
            if (document.getElementById('pagetitle').innerHTML != "Login") {
                $window.location.href = 'login.html';
            }
        }else{
            if (document.getElementById('pagetitle').innerHTML == "Login") {
                $window.location.href = 'index.html';
            }
        }
    }


}]);