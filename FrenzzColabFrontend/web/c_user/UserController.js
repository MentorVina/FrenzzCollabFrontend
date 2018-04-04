myApp.controller("UserController",function($scope,$http,$location,$rootScope,$cookieStore)
{
	$scope.user={"loginName":'',"pass":'',"role":'',"userName":'',"email":'',"gender":'',"age":0,"address":'',"isOnline":'',"contactNo":'',"dob":''}
		
	//$scope.user1={"loginName":'',"pass":'',"role":'ROLEUSER',"userName":'',"email":'',"gender":'',"age":0,"address":'',"isOnline":'N',"contactNo":'',"dob":''}
	
	$scope.userdata;
	
	
	$scope.Register=function()
	{
		console.log("Enter into Register Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addUser',$scope.user)
		.then(fetchAllUser(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
			scope.msg="Data inserted sucessfully";
		
	     });			
	};
	
	function fetchAllUser()
	{
		console.log('Fetching All Users');
		$http.get("http://localhost:8081/FrenzzColabMiddleWare/listUsers")
		.then(function(response)
				{
			            $scope.userdata=response.data;
				});
	}
	
	
	
	
	fetchAllUser();
	
	
	
	
	
	
	$rootScope.login=function()
	{
		console.log("Enter into logging Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/login',$scope.user)
		.then(function(response)
     	{
			console.log("Enter into login function");
			console.log(response.status);
			$scope.user=response.data;
			$rootScope.currentUser=response.data;
			$cookieStore.put('user',response.data);
			console.log($rootScope.currentUser.role);
			if($rootScope.currentUser.role=ROLEADMIN)
				{
				$location.path("/");
				}
			else
				{
				$location.path("/");
				}
		
		
	     });			
	};
	
	
	
	$scope.logout=function()
	{
		console.log('Enter into the logout method');
		delete $rootScope.currentUser;
		$cookieStore.remove('user');
	   $location.path("/logout");
     }
	
	
	
	
	
	
});