/**
 * Created by User PC on 5/7/2017.
 */
pharmacyApp.controller('PatientController', ['$scope', '$route', '$http', 'PatientService', function ($scope, $route, $http, PatientService) {

    function getPatients() {
        PatientService.get().then(function (patients) {
            $scope.patients = patients;
        })
    }

    getPatients();

    $scope.addPatients = function (patient) {
        PatientService.add(patient).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.patient = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
            getPatients();
        })
    };
}]);