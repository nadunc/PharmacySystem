/**
 * Created by User PC on 5/9/2017.
 */
pharmacyApp.controller('PrescriptController', ['$scope', '$route', '$http', 'PrescriptService','InventoryItemService', function ($scope, $route, $http, PrescriptService,InventoryItemService) {
    $scope.rows = [];
    function getPrescript() {
        PrescriptService.getHistory().then(function (prescripts) {
            $scope.prescripts = prescripts;
        })
    }


    getPrescript();

     function getInventoryItems() {
        InventoryItemService.get().then(function (inventoryItems) {
            $scope.inventoryItems = inventoryItems;
        })
    }

    getInventoryItems();
    
    $scope.addRow = function () {

        $scope.rows.push({
            'drug': $scope.prescript.druglist.drug,
            'quantity': $scope.prescript.druglist.quantity,
            'dosage': $scope.prescript.druglist.dosage,
            'frequency': $scope.prescript.druglist.frequency,
            'period': $scope.prescript.druglist.period,
            'description': $scope.prescript.druglist.description
        });
        $scope.prescript.druglist.drug = '';
        $scope.prescript.druglist.quantity = '';
        $scope.prescript.druglist.dosage = '';
        $scope.prescript.druglist.frequency = '';
        $scope.prescript.druglist.period = '';
        $scope.prescript.druglist.description = '';

        $scope.rows.data.drug = '';
    };
    $scope.addPrescript = function (prescript) {
        $scope.prescript.druglist = $scope.rows;
        PrescriptService.add(prescript).then(function (data) {
            if (data.success) {
                $scope.errorMsg = false;
                $scope.successMsg = true;
                console.log(prescript);
                console.log(data);
                $scope.prescript = {};
                

            } else {
                $scope.successMsg = false;
                $scope.errorMsg = true;
            }

        })

    };
    

}]);
