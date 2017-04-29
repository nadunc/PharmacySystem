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


        }).when("/test3", {
            templateUrl: "login.html"
        }).otherwise({
            templateUrl: "404.html"
        });
});