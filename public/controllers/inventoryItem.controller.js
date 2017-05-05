pharmacyApp.controller('InventoryItemController', ['$scope', '$route', '$http', 'InventoryItemService', 'DrugService', 'SupplierService', function ($scope, $route, $http, InventoryItemService, DrugService, SupplierService) {
    $scope.days = 0;


    function getInventoryItems() {
        InventoryItemService.get().then(function (inventoryItems) {
            $scope.inventoryItems = inventoryItems;

            var i = 0;
            angular.forEach($scope.inventoryItems, function (eachObj) {
                i += 1;

                formatDates(eachObj);
                setExpiryStatus(eachObj);

            });

            $scope.inventoryItems = inventoryItems;
        })
    }

    getInventoryItems();

    // function getExpiredInventoryItems() {
    //     InventoryItemService.getExpired().then(function (inventoryItems) {
    //         $scope.expiredInventoryItems = inventoryItems;
    //     })
    // }
    //
    // getExpiredInventoryItems();


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


    $scope.getExpiringItems = function () {
        var days = $scope.days;
        InventoryItemService.getExpiring(days).then(function (inventoryItems) {
            $scope.expiringInventoryItems = inventoryItems;

            var i = 0;
            angular.forEach($scope.expiringInventoryItems, function (eachObj) {
                i += 1;
                formatDates(eachObj);
                setExpiryStatus(eachObj);

            });
        })
    };

    $scope.getExpiringItems();


    $scope.addInventoryItem = function (inventoryItem) {
        InventoryItemService.add(inventoryItem).then(function (data) {
            if (data.success) {
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.inventoryItem = {};

            } else {
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }

        })
    };


    function formatDates(obj) {
        obj.expiryDate = obj.expiryDate.substring(0, 10);
        obj.manufactureDate = obj.manufactureDate.substring(0, 10);
        obj.buyingDate = obj.buyingDate.substring(0, 10);
    }

    function setExpiryStatus(obj){
        var timeDiff = new Date(obj.expiryDate).getTime() - new Date().getTime();

        if (timeDiff <= 86400000) {
            obj.status = 'danger';
        }else if (timeDiff <= 86400000 * 7) {
            obj.status = 'warning';
        }
    }

}]);