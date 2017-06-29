pharmacyApp.factory('UserService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/users').then(function (res) {
                return res.data;
            });
        },

        add: user => $http.post(nodeHost+'/users', user).then(response => response.data)

    };
}]);