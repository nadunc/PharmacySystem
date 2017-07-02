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

    /*$scope.getPatientsById = function () {
        var nic = $scope.nic2;
        PatientService.getById(nic).then(function (patients) {
            console.log(patients);
            $scope.patients = patients;
        })
        $scope.getPatientsById();
    };*/

    //$scope.getPatientsById();


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
    $scope.loadPatientEditor = function (patient) {
        $scope.editingPatient = patient;
        showPatientEditModal();
    };

    $scope.editPatient = function () {
        PatientService.update($scope.editingPatient).then(function (res) {
            if(res.nModified > 0){
                $scope.errorMsg_edit = false;
                $scope.successMsg_edit = true;

            }else{
                $scope.successMsg_edit = false;
                $scope.errorMsg_edit = true;
            }
        });
    };
}]);