pharmacyApp.factory('DrugService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/drugs').then(function (res) {
                return res.data;
            });
        },
        //get: () => $http.get('/users').then(response => response.data),
        add: drug => $http.post('/drugs', drug).then(response => response.data)
        // getById: id => $http.get('/drivers/' + id).then(response => response.data),
        // addComment: (id, comment) => $http.post('/drivers/' + id + '/comments', comment).then(response => response.data),
    };
}]);