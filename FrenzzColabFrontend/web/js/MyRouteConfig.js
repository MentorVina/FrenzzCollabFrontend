
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
	.when("/blog",{
		templateUrl : "c_blog/Blog.html"
	})
	.when("/displayBlog",{
		templateUrl : "c_blog/DisplayBlog_page.html"
	})
	.when("/updateBlog",{
		templateUrl : "c_blog/UpdateBlog_page.html"
	})
	
	.when("/forum",{
		templateUrl : "c_forum/Forum.html"
	})
	
	.when("/displayForum",{
		templateUrl : "c_forum/DisplayForum_page.html"
	})
	.when("/About Us", {
		templateUrl : "template/About Us.htm"
	})
	.when("/Contact Us", {
		templateUrl : "template/Contact Us.htm"
	})

});