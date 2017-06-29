pharmacyApp.factory('UserService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/users').then(function (res) {
                return res.data;
            });
        },

        add: user => $http.post(nodeHost+'/users', user).then(response => response.data),

        login: function (credentials) {
            return $http.post(nodeHost+'/users/login', credentials).then(function (res) {
                return res.data;
            });
        },

        isAuth : function (data) {
            return $http.post(nodeHost + '/users/auth', data).then(function (res) {
                return res.data;
            });
        }

    };
}]);