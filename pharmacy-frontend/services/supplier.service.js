pharmacyApp.factory('SupplierService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/suppliers').then(function (res) {
                return res.data;
            });
        },

        add: supplier => $http.post(nodeHost+'/suppliers', supplier).then(response => response.data)

    };
}]);