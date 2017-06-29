pharmacyApp.factory('PrescriptionService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/prescriptions').then(function (res) {
                return res.data;
            });
        },

        add: prescription => $http.post(nodeHost+'/prescriptions', prescription).then(response => response.data)

    };
}]);
