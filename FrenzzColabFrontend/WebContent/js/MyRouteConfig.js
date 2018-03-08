
var myApp = angular.module("myApp", [ "ngRoute" ]);

myApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "/index.jsp"
	})
	.when("/login", {
		templateUrl : "template/login.jsp"
	})
	.when("/Register", {
		templateUrl : "template/Register.jsp"
	})
	.when("/About Us", {
		templateUrl : "template/About Us.htm"
	})
	.when("/Contact Us", {
		templateUrl : "template/Contact Us.htm"
	})

});