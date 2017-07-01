pharmacyApp.factory('UnitMonthlyRequestService' ,('$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/unitMonthlyRequests').then(function (res) {
                return res.data;
            });
        },

        add: unitMonthlyRequest => $http.post(nodeHost+'/unitMonthlyRequests', unitMonthlyRequest).then(response => response.data),

    }

}));
