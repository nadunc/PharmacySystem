pharmacyApp.factory('BillerService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/bills').then(function (res) {
                return res.data;
            });
        },
       
        add: bill => $http.post(nodeHost+'/bills', bill).then(response => response.data)

    };
}]);
