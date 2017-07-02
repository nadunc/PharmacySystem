pharmacyApp.controller('UnitMonthlyRequestController', ['$scope', '$route', '$http', 'UnitMonthlyRequestService', 'InventoryItemService', 'DrugService', 'DepartmentService' ,
    function ($scope, $route, $http, UnitMonthlyRequestService, InventoryItemService, DrugService, DepartmentService)
    {

    $scope.selectedDrug = "";
    $scope.requestItems = [];
    $scope.monthlyRequest = {inventoryItems:[]};

    function getUnitMonthlyRequest() {
        UnitMonthlyRequestService.get().then(function (monthlyRequests) {
            $scope.monthlyRequests = monthlyRequests;
        });
    }

    getUnitMonthlyRequest();

    function getDepartments() {
        DepartmentService.getDepartments().then(function (departments) {
            $scope.departments = departments;
        });
    }
    getDepartments();

        $scope.addDepartment = function (department) {
            DepartmentService.add(department).then(function (data) {
                if (data.success) {
                    // $scope.errorMsg = false;
                    // $scope.successMsg = true;
                    $scope.department = {};
                    getDepartments();

                } else {
                    // $scope.successMsg = false;
                    // $scope.errorMsg = true;
                }

            })
        };


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

    };

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

    $scope.addUnitMonthlyRequest = function () {

        //$scope.monthlyRequest = monthlyRequest;
        $scope.monthlyRequest.inventoryItems = $scope.requestItems;


        UnitMonthlyRequestService.add($scope.monthlyRequest).then(function (data) {
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
        $scope.monthlyRequest.inventoryItems = $scope.requestItems;
    };


        $scope.viewDrugs = function (requestId) {
            $scope.viewRequest = requestId;
            showDrugs();
        }
}]);
