/**
 * Created by anvitasurapaneni on 11/26/17.
 */

"use strict";
(function(){
    angular
        .module("MyApp")
        .config(configuration);

    function configuration($routeProvider){
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
    }

})();