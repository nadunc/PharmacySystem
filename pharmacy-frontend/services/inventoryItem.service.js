pharmacyApp.factory('InventoryItemService',['$http', function ($http) {
    return {
        get : function () {
            return $http.get(nodeHost+'/inventory').then(function (res) {
                return res.data;
            });
        },
        getAvailableItems : function (drugId) {
            return $http.get(nodeHost+'/inventory/available/'+drugId).then(function (res) {
                return res.data;
            });
        },
        getExpired : function () {
            return $http.get(nodeHost+'/inventory/expired').then(function (res) {
                return res.data;
            });
        },
        getExpiring : function (days) {
            return $http.get(nodeHost+'/inventory/expiring/'+days).then(function (res) {
                return res.data;
            });
        },

        add: drug => $http.post(nodeHost+'/inventory', drug).then(response => response.data)

    };
}]);