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

        .when("/inventory/all", {
            templateUrl: "views/inventory_item_list.html",
            controller: "InventoryItemController"
        })
        .when("/inventory/add", {
            templateUrl: "views/inventory_item_add.html",
            controller: "InventoryItemController"
        })
        .when("/inventory/expired", {
            templateUrl: "views/inventory_item_list_expired.html",
            controller: "InventoryItemController"
        })



        .when("/", {
            templateUrl: "views/drug_list.html",
            controller: "DrugController"
        })

        .otherwise({
            templateUrl: "404.html"
        });
});
