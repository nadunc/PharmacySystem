pharmacyApp.controller('BillController', ['$scope', '$route', '$http', 'BillService','DrugService', function ($scope, $route, $http, BillService,DrugService) {

    function getBills() {
        BillService.get().then(function (bills) {
            $scope.bills = bills;
        })
    }

    getBills();

    function getDrugs() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        })
    }

    getDrugs();
    
    $scope.addBill = function (bill) {
        BillService.add(bill).then(function (data) {
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
