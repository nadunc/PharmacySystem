pharmacyApp.controller('SupplierController', ['$scope', '$route', '$http', 'SupplierService', function ($scope, $route, $http, SupplierService) {

    function getSuppliers() {
        SupplierService.get().then(function (suppliers) {
            $scope.suppliers = suppliers;
        })
    }

    getSuppliers();

    $scope.addSupplier = function (supplier) {
        SupplierService.add(supplier).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
            getSuppliers();
            $scope.supplier = {};
        })
    };
}]);