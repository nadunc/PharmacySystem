pharmacyApp.factory('InventoryItemService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/inventory').then(function (res) {
                return res.data;
            });
        },
        getExpired : function () {
            return $http.get('/inventory/expired').then(function (res) {
                return res.data;
            });
        },
        add: drug => $http.post('/inventory', drug).then(response => response.data)
        // getById: id => $http.get('/drivers/' + id).then(response => response.data),
        // addComment: (id, comment) => $http.post('/drivers/' + id + '/comments', comment).then(response => response.data),
    };
}]);