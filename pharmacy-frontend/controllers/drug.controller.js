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


    $scope.loadDrugEditor = function (drug) {
        $scope.editingDrug = drug;
        showDrugEditModal();
    };

    $scope.editDrug = function () {
        DrugService.update($scope.editingDrug).then(function (res) {
            if(res.nModified > 0){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.drug = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
        });
    };

}]);