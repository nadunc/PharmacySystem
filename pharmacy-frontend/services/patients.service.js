/**
 * Created by User PC on 5/7/2017.
 */
pharmacyApp.factory('PatientService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/patients').then(function (res) {
                return res.data;
            });
        },
        getById : function (nic) {
            return $http.get(nodeHost+'/patients/'+nic).then(function (res) {
                return res.data;
            });
        },
        update: function (patient) {
            return $http.put(nodeHost+'/patients', patient).then(function (res) {
                return res.data;
            });
        },

        add: patient => $http.post(nodeHost+'/patients', patient).then(response => response.data)

    };
}]);