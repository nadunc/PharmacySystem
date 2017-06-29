pharmacyApp.controller('UnitMonthlyRequestController', ['$scope', '$route', '$http', 'UnitMonthlyRequestService', 'InventoryItemService', 'DrugService', function ($scope, $route, $http, UnitMonthlyRequestService, InventoryItemService, DrugService) {

    $scope.selectedDrug = "";
    $scope.requestItems = [];

    function getUnitMonthlyRequest() {
        UnitMonthlyRequestService.get().then(function (monthlyRequest) {
            $scope.monthlyRequest = monthlyRequest;
        });
    }

    getUnitMonthlyRequest();

    function getDepartments() {
        UnitMonthlyRequestService.getDepartments().then(function (departments) {
            $scope.departments = departments;
        });
    }

    getDepartments();

    $scope.getAvailableInventoryItems = function getAvailableInventoryItems() {
        var drugId = $scope.selectedDrug;

        InventoryItemService.getAvailableItems(drugId).then(function (items) {
            $scope.availableInventoryItems = items;

            var i = 0;
            angular.forEach($scope.availableInventoryItems, function (eachObj) {
                i += 1;

                formatDates(eachObj);

            });
        });

    }

    function formatDates(obj) {
        obj.expiryDate = obj.expiryDate.substring(0, 10);
        obj.manufactureDate = obj.manufactureDate.substring(0, 10);
        obj.buyingDate = obj.buyingDate.substring(0, 10);

        console.log(obj.expiryDate);
    }

    function getDrugList() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        });
    }

    getDrugList();

    $scope.addunitMonthlyRequest = function (monthlyRequest) {
        UnitMonthlyRequestService.add(monthlyRequest).then(function (data) {
            if (data.success) {
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.monthlyRequest = {};

            } else {
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }

        })
    };


    $scope.addRequestItem = function addRequestItem(requestItem) {

        //var itemObj = {item:requestItem.item, qty:requestItem.qty};
        // $scope.requestItems.push(itemObj);
        $scope.requestItems.push(requestItem);

        $scope.requestItem = {};
    }


}]);
