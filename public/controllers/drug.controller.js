pharmacyApp.controller('DrugController', ['$scope', '$route', '$http', 'DrugService', function ($scope, $route, $http, DrugService) {

    function getDrugs() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        })
    }

    getDrugs();

    $scope.addDrug = function (drug) {
        DrugService.add(drug).then(function () {
            getDrugs();
            drug = {};
        })
    };
}]);