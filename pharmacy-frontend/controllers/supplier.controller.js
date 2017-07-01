pharmacyApp.controller('SupplierController', ['$scope', '$route', '$http', 'SupplierService','DrugService', function ($scope, $route, $http, SupplierService, DrugService) {

    $scope.request = {drugs:[]};


    function getSuppliers() {
        SupplierService.get().then(function (suppliers) {
            $scope.suppliers = suppliers;
        })
    }

    function getDrugs() {
        DrugService.get().then(function (drugs) {
            $scope.drugs = drugs;
        })
    }
    getSuppliers();
    getDrugs();

    $scope.addSupplier = function (supplier) {
        SupplierService.add(supplier).then(function (data) {
            if(data.success){
                $scope.errorMsg_add = false;
                $scope.successMsg_add = true;
                $scope.supplier = {};

            }else{
                $scope.successMsg_add = false;
                $scope.errorMsg_add = true;
            }
            getSuppliers();
        })
    };

    $scope.loadSupplierEditor = function (supplier) {
        $scope.editingSupplier = supplier;
        showSupplierEditModal();
    };

    $scope.editSupplier = function () {
        SupplierService.update($scope.editingSupplier).then(function (res) {
            if(res.nModified > 0){
                $scope.errorMsg_edit = false;
                $scope.successMsg_edit = true;

            }else{
                $scope.successMsg_edit = false;
                $scope.errorMsg_edit = true;
            }
        });
    };



    $scope.addDrug = function (drug) {
        $scope.request.drugs.push(drug);
        drug = {};
        hideSupplierRequestModal();
    };

    $scope.addRequest = function () {
        alert("in");
        var drugs = [];
        for(var i=0; i<$scope.request.drugs.length; i++ ){
            var drug = {drug:$scope.request.drugs[i]._id, qty:$scope.request.drugs[i].qty};
            drugs.push(drug);
        }

        $scope.request.drugs = drugs;

        SupplierService.addRequest($scope.request).then(function (request) {
            $scope.request = {};
        });
    };


    function getSupplierRequests() {
        SupplierService.getRequests().then(function (requests) {

            $scope.requests = requests;

            // for(var i=0; i<requests; i++){
            //     SupplierService.findById(requests[i].supplier).then(function (supplier) {
            //         requests[i].supplier = supplier;
            //     });
            // }

            // for(var i=0; i<$scope.requests; i++){
            //     for(var j=0; j<$scope.suppliers.length; j++){
            //         if($scope.suppliers[j]._id == $scope.requests[i].supplier){
            //             $scope.requests[i].supplier = $scope.suppliers[j];
            //         }
            //     }
            //
            //     for(var k=0; k<$scope.drugs.length; k++){
            //         for(var k=0; k<$scope.requests[i].drugs.length; k++){
            //             if($scope.drugs[k]._id == $scope.requests[i].drug.drug){
            //                 $scope.requests[i].drug.drug = $scope.drugs[k];
            //             }
            //         }
            //     }
            // }
        });
    }

    getSupplierRequests();


}]);