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
                $scope.errorMsg_add = false;
                $scope.successMsg_add = true;
                $scope.supplier = {};

            }else{
                $scope.successMsg_add = false;
                $scope.errorMsg_add = true;
            }
            getSuppliers();
        })
    };

    $scope.loadSupplierEditor = function (supplier) {
        $scope.editingSupplier = supplier;
        showSupplierEditModal();
    };

    $scope.editSupplier = function () {
        SupplierService.update($scope.editingSupplier).then(function (res) {
            if(res.nModified > 0){
                $scope.errorMsg_edit = false;
                $scope.successMsg_edit = true;

            }else{
                $scope.successMsg_edit = false;
                $scope.errorMsg_edit = true;
            }
        });
    };
}]);