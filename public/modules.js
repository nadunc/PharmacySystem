'use strict';

var pharmacyApp = angular.module("pharmacyApp", ["ngRoute"]);

pharmacyApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when("/test1", {
            templateUrl: "views/test1.html",
            controller: "UserController",
            message: "Test 1"

        })
        .when("/test2", {
            templateUrl: "views/test2.html",
            controller: "UserController",
            message: "Test 2"

        })
        .when("/test3", {
            templateUrl: "login.html"
        })
        .when("/prescriptions", {
            templateUrl: "views/prescription.html",
            controller: "PrescriptionController"
        })
        
        .when("/drugs/all",{
            templateUrl: "views/drug_list.html",
            controller: "DrugController"
        })
        .when("/drugs/add",{
            templateUrl: "views/drug_add.html",
            controller: "DrugController"
        })
        .when("/suppliers", {
            templateUrl: "views/supplier_list.html",
            controller: "SupplierController"
        })
        .when("/patients", {
            templateUrl: "views/patients.html",
            controller: "PatientController"
        })
        .when("/prescript/add", {
            templateUrl: "views/addPrescription.html",
            controller: "PrescriptController"
        })
        .when("/prescript/history", {
            templateUrl: "views/prescriptionHistory.html",
            controller: "PrescriptController"
        })
        .when("/inventory/all", {
            templateUrl: "views/inventory_item_list.html",
            controller: "InventoryItemController"
        })
        .when("/inventory/add", {
            templateUrl: "views/inventory_item_add.html",
            controller: "InventoryItemController"
        })
        .when("/inventory/expire", {
            templateUrl: "views/inventory_item_list_expiring.html",
            controller: "InventoryItemController"
        })
        .when("/monthlyRequest/view", {
            templateUrl: "views/monthlyRequest_view.html",
            controller: "UnitMonthlyRequestController"
        })
        .when("/monthlyRequest/edit", {
            templateUrl: "views/monthlyRequest_edit.html",
            controller: "UnitMonthlyRequestController"
        })
        .when("/specialRequest/add", {
            templateUrl: "views/specialRequest_add.html",
            controller: "SpecialRequestCpntroller"
        })
        .when("/", {
            templateUrl: "views/dashboard.html"
        })


        .otherwise({
            templateUrl: "404.html"
        });
});
