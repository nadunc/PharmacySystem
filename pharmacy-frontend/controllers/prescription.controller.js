pharmacyApp.controller('PrescriptionController', ['$scope', '$route', '$http', 'PrescriptionService', function ($scope, $route, $http, PrescriptionService) {

    function getPrescriptions() {
        PrescriptionService.get().then(function (prescriptions) {
            $scope.prescriptions = prescriptions;
        })
    }

    getPrescriptions();
    
    $scope.addPrescription = function (prescription) {
        PrescriptionService.add(prescription).then(function (data) {
            if(data.success){
                $scope.errorMsg = false;
                $scope.successMsg = true;
                $scope.prescription = {};

            }else{
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }
            
        })
    };


    
}]);
