/**
 * Created by User PC on 5/9/2017.
 */
pharmacyApp.controller('PrescriptController', ['$scope', '$route', '$http', 'PrescriptService', function ($scope, $route, $http, PrescriptService) {

    function getPrescript() {
        PrescriptService.get().then(function (prescript) {
            $scope.prescript = prescript;
        })
    }

    getPrescript();

    $scope.addPrescript = function (prescript) {
        PrescriptService.add(prescript).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.drug = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }

        })
    };
}]);