pharmacyApp.factory('UnitMonthlyRequestService' ,('$http', function ($http) {
    return {
        get : function () {
            return $http.get('/unitMonthlyRequest').then(function (res) {
                return res.data;
            });
        },

        add: unitMonthlyRequest => $http.post('/unitRequest', unitMonthlyRequest).then(response => response.data),

        getDepartments : function () {
            return $http.get('/departments').then(function (res) {
                return res.data;
            });
        },
    }

}));
