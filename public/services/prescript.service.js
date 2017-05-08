/**
 * Created by User PC on 5/9/2017.
 */
pharmacyApp.factory('PrescriptService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/prescript').then(function (res) {
                return res.data;
            });
        },
        addPrescript : function () {
            return $http.get('/prescript/add').then(function (res) {
                return res.data;
            });
        },
        getHistory : function () {
            return $http.get('/prescript/history').then(function (res) {
                return res.data;
            });
        },


        add: prescript  => $http.post('/prescript', prescript).then(response => response.data)
        // getById: id => $http.get('/drivers/' + id).then(response => response.data),
        // addComment: (id, comment) => $http.post('/drivers/' + id + '/comments', comment).then(response => response.data),
    };
}]);