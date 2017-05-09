pharmacyApp.factory('BillerService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/bills').then(function (res) {
                return res.data;
            });
        },
       
        add: bill => $http.post('/bills', bill).then(response => response.data)
        // getById: id => $http.get('/drivers/' + id).then(response => response.data),
        // addComment: (id, comment) => $http.post('/drivers/' + id + '/comments', comment).then(response => response.data),
    };
}]);
