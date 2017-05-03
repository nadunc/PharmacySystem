pharmacyApp.controller('DrugController', ['$scope', '$route', '$http', 'DrugService', function ($scope, $route, $http, DrugService) {

    function getDrugs() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        })
    }

    getDrugs();

    $scope.addDrug = function (drug) {
        DrugService.add(drug).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.drug = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
            // getDrugs();
        })
    };
}]);