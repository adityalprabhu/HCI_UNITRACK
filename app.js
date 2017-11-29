var app = angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "LoginView/Login.html",
        controller : "loginController"
    })
    .when("/home", {
        templateUrl : "Homeview/Homepage.html",
        controller : "homepageController"
    })
    .when("/add", {
            templateUrl : "AddTrackingItemView/AddTrackingItem.html",
            controller : "addItemController"
        })
        .when("/calendar", {
            templateUrl : "CalendarView/Calendar.html",
            controller : "calendarController"
        })
        .otherwise({
            redirectTo: "/"
        })
});
