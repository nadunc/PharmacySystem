pharmacyApp.factory('DrugService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/drugs').then(function (res) {
                return res.data;
            });
        },
        add: drug => $http.post(nodeHost+'/drugs', drug).then(response => response.data)
    };
}]);