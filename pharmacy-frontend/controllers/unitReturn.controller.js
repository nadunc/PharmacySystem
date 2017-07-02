pharmacyApp.controller ('UnitReturnController', ['$scope', '$route', '$http', 'UnitReturnService', 'DepartmentService','UnitMonthlyRequestService', function ($scope, $route, $http, UnitReturnService, DepartmentService, UnitMonthlyRequestService) {
    function getUnitReturn() {
        UnitReturnService.get().then(function (unitReturns) {
            $scope.unitReturns = unitReturns;
        });
    }

    getUnitReturn();

    $scope.addUnitReturn = function (unitReturn) {
        UnitReturnService.add(unitReturn).then(function (data) {
            if (data.success) {
                // $scope.errorMsg = false;
                // $scope.successMsg = true;
                $scope.unitReturn = {};
                getUnitReturn();

            } else {
                // $scope.successMsg = false;
                // $scope.errorMsg = true;
            }

        })
    };

    function getDepartments() {
        DepartmentService.getDepartments().then(function (departments) {
            $scope.departments = departments;
            // alert($scope.departments[0]._id);
        });
    }

    function getUnitMonthlyRequests() {
        UnitMonthlyRequestService.get().then(function (unitMonthlyRequests) {
            $scope.unitMonthlyRequests = unitMonthlyRequests;

        });
    }
    getDepartments();
    getUnitMonthlyRequests();


}]);