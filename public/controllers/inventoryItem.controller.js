pharmacyApp.controller('InventoryItemController', ['$scope', '$route', '$http', 'InventoryItemService', 'DrugService', 'SupplierService', function ($scope, $route, $http, InventoryItemService, DrugService, SupplierService) {

    function getInventoryItems() {
        InventoryItemService.get().then(function (inventoryItems) {
            $scope.inventoryItems = inventoryItems;
        })
    }

    getInventoryItems();

    function getDrugs() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        })
    }

    getDrugs();

    function getSuppliers() {
        SupplierService.get().then(function (suppliers) {
            $scope.suppliers = suppliers;
        })
    }

    getSuppliers();


    $scope.addInventoryItem = function (inventoryItem) {
        InventoryItemService.add(inventoryItem).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.inventoryItem = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }

        })
    };


}]);