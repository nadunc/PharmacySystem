pharmacyApp.controller('SalesController', ['$scope', '$route', '$http', 'SalesService', function ($scope, $route, $http, SalesService) {

    function getSales() {
        SalesService.get().then(function (sales) {
            $scope.sales = sales;
        })
    }

    getSales();
    
}]);