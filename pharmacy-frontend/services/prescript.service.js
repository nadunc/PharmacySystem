/**
 * Created by User PC on 5/9/2017.
 */
pharmacyApp.factory('PrescriptService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/prescripts').then(function (res) {
                return res.data;
            });
        },
        addPrescript : function () {
            return $http.get(nodeHost+'/prescripts/add').then(function (res) {
                return res.data;
            });
        },
        getHistory : function () {
            return $http.get(nodeHost+'/prescripts/history').then(function (res) {
                return res.data;
            });
        },
        add: prescript  => $http.post(nodeHost+'/prescripts', prescript).then(response => response.data)
    };
}]);