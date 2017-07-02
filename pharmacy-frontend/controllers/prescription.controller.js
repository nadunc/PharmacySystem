pharmacyApp.controller('PrescriptionController', ['$scope', '$route', '$http', 'PrescriptionService','InventoryItemService', function ($scope, $route, $http, PrescriptionService,InventoryItemService) {



    function getPrescriptions() {
        PrescriptionService.get().then(function (prescriptions) {
            $scope.prescriptions = prescriptions;
            
        })
    }

    getPrescriptions();

    function getInventoryItems() {
        InventoryItemService.get().then(function (inventoryItems) {
            $scope.inventoryItems = inventoryItems;
        })
    }

    getInventoryItems();


   

   

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
