/**
 * Created by User PC on 5/7/2017.
 */
pharmacyApp.controller('PatientsController', ['$scope', '$route', '$http', 'PatientsService', function ($scope, $route, $http, PatientsService) {

    function getPatients() {
        PatientsService.get().then(function (patients) {
            $scope.patients = patients;
        })
    }

    getPatients();

    $scope.addPatients = function (patients) {
        PatientsService.add(patients).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.patients = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
            getPatients();
        })
    };
}]);