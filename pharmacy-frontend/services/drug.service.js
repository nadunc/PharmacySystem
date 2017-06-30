pharmacyApp.factory('DrugService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/drugs').then(function (res) {
                return res.data;
            });
        },
        add: drug => $http.post(nodeHost+'/drugs', drug).then(response => response.data),

        findById: function (drugId) {
            showDrugEditModal();
            return $http.get(nodeHost+'/drugs/'+drugId).then(function (res) {
                return res.data;
            });
        },

        update: function (drug) {
            return $http.put(nodeHost+'/drugs', drug).then(function (res) {
                return res.data;
            });
        }
    };
}]);