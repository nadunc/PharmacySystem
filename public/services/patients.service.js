/**
 * Created by User PC on 5/7/2017.
 */
pharmacyApp.factory('PatientService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/patients').then(function (res) {
                return res.data;
            });
        },
        //get: () => $http.get('/users').then(response => response.data),
        add: patient => $http.post('/patients', patient).then(response => response.data)
        // getById: id => $http.get('/drivers/' + id).then(response => response.data),
        // addComment: (id, comment) => $http.post('/drivers/' + id + '/comments', comment).then(response => response.data),
    };
}]);