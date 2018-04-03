
var myApp=angular.module("myApp",['ngRoute',,'ngCookies']);

myApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "/index.jsp"
	})
	.when("/login", {
		templateUrl : "c_user/login.html"
	})
	.when("/Register", {
		templateUrl : "c_user/Register.jsp"
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
	.when("/job",{
		templateUrl : "c_job/Job.html"
	})
	
	.when("/displayJob",{
		templateUrl : "c_job/DisplayJob_page.html"
	})
	.when("/searchJob",{
		templateUrl : "c_job/JobSearch_page.html"
	})
	.when("/About Us", {
		templateUrl : "template/About Us.htm"
	})
	.when("/Contact Us", {
		templateUrl : "template/Contact Us.htm"
	})

	.when("/logout", {
		templateUrl : "c_user/Logout.html"
	})
});



myApp.run(function($rootScope,$cookieStore)
{
	      console.log('I am in run function');
	      console.log($rootScope.currentUser);
	      if($rootScope.currentUser==undefined)
	    	  {
	    	        $rootScope.currentUser=$cookieStore.get('user');
	    	  }
	      
	      
	      
	      else
	   {
	    	  console.log($rootScope.currentUser.userName);
	    	  console.log($rootScope.currentUser.role);
	    	  
	     }
 
});

	      
	      
	      
	      
	      