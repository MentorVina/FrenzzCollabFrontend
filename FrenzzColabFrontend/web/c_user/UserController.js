myApp.controller("UserController",function($scope,$http,$location,$rootScope,$cookieStore)
{
	$scope.user={"loginName":'',"pass":'',"role":'',"userName":'',"email":'',"gender":'',"age":0,"address":'',"isOnline":'',"conatctNo":'',"dob":''}
		
	
	
	
	
	$rootScope.login=function()
	{
		console.log("Enter into logging Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/login',$scope.user)
		.then(function(response)
     	{
			console.log(response.status);
			$scope.user=response.data;
			$rootScope.currentUser=response.data;
			$cookieStore.put('user',response.data);
			console.log($rootScope.currentUser.role);
			if($rootScope.currentUser.role=ROLEADMIN)
				{
				  console.log('AdminPage');
				}
			else
				{
				  console.log('UserPage');
				}
			$location.path("/");
		
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