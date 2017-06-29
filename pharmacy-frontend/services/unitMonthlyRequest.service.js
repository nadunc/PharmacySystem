pharmacyApp.factory('UnitMonthlyRequestService' ,('$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/unitMonthlyRequests').then(function (res) {
                return res.data;
            });
        },

        add: unitMonthlyRequest => $http.post(nodeHost+'/unitRequest', unitMonthlyRequest).then(response => response.data),

        getDepartments : function () {
            return $http.get(nodeHost+'/departments').then(function (res) {
                return res.data;
            });
        }
    }

}));
