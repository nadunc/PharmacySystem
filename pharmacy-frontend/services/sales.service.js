pharmacyApp.factory('SalesService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/sales').then(function (res) {
                return res.data;
            });
        },
    
        add: sales => $http.post(nodeHost+'/sales', sales).then(response => response.data)

    };
}]);