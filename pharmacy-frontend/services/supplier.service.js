pharmacyApp.factory('SupplierService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/suppliers').then(function (res) {
                return res.data;
            });
        },

        findById : function (id) {
            return $http.get(nodeHost+'/suppliers/'+id).then(function (res) {
                return res.data;
            });
        },

        add: supplier => $http.post(nodeHost+'/suppliers', supplier).then(response => response.data),

        update: function (supplier) {
            return $http.put(nodeHost+'/suppliers', supplier).then(function (res) {
                return res.data;
            });
        },

        addRequest: function (request) {
            return $http.post(javaHost+'/suppliers/requests', request).then(function (res) {
                return res.data;
            });
        },

        getRequests: function () {
            return $http.get(javaHost+'/suppliers/requests').then(function (res) {
                return res.data;
            });
        }

    };
}]);