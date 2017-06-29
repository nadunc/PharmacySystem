pharmacyApp.controller('BillerController', ['$scope', '$route', '$http', 'BillerService', function ($scope, $route, $http, BillerService) {

    function getBills() {
        BillerService.get().then(function (bills) {
            $scope.bills = bills;
        })
    }

    getBills();

    $scope.addBill = function (bill) {
        BillerService.add(bill).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.bill = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
           
        });
    };
}]);
