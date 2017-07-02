pharmacyApp.factory('UnitReturnService' ,('$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/unitReturns').then(function (res) {
                return res.data;
            });
        },

        add: unitReturn => $http.post(nodeHost+'/unitReturns', unitReturn).then(response => response.data)


    }

}));