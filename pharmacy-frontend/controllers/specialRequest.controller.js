pharmacyApp.controller('SpecialRequestCpntroller', ['$scope', '$route', '$http', 'SpecialRequestService', function ($scope, $route, $http, SpecialRequestService){

    // function getUnitMonthlyRequest() {
    //     UnitMonthlyRequestService.get().then(function (monthlyRequest) {
    //         $scope.monthlyRequest = monthlyRequest;
    //     });
    // }
    // getUnitMonthlyRequest();
    //
    // function getDepartments() {
    //     UnitMonthlyRequestService.getDepartments().then(function (departments) {
    //         $scope.departments = departments;
    //     });
    // }
    // getDepartments();
    //
    //
    // $scope.addunitMonthlyRequest = function (monthlyRequest) {
    //     UnitMonthlyRequestService.add(monthlyRequest).then(function (data) {
    //         if(data.success){
    //             $scope.errorMsg = false;
    //             $scope.successMsg = true;
    //             $scope.monthlyRequest= {};
    //
    //         }else{
    //             $scope.successMsg = false;
    //             $scope.errorMsg = true;
    //         }
    //
    //     })
    // };

}]);