myApp.controller("UserController",function($scope,$http,$location,$rootScope,$cookieStore)
{
	$scope.user={"loginName":'',"pass":'',"role":'',"userName":'',"email":'',"gender":'',"age":'0',"address":'',"isOnline":'',"contactNo":'',"dob":''}
		
	
	
	$scope.userdata;
	
	
	$scope.Register=function()
	{
		console.log("Enter into Register Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addUser',$scope.user)
		.then(fetchAllUser(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
			alert("Data inserted sucessfully");
		
	     });			
	};
	
	
	$scope.updateUser=function(loginName)
	{
		console.log('Enter into the update  method');
		console.log(loginName);
		$http.put('http://localhost:8081/FrenzzColabMiddleWare/UpdateUser/'+loginName,$scope.user)

		.then(fetchAllUser(),function(response)
				{
			         console.log('hi');
			        console.log('Status Text:'+response.statusText);
			        
				});
	};
	
	
	$scope.editUser = function(loginName){
        
        console.log("edit Function");
		$http.get('http://localhost:8081/FrenzzColabMiddleWare/getUserById/'+loginName)
		.then(function(response){
			console.log(loginName);
			$scope.user = response.data;			
			
		});
	};
	
	
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
			if($rootScope.currentUser.role=='ROLEUSER')
				{
				$location.path("/");
				alert("Login sucssfully");
				}
			else 
				{
				$location.path("/");
				}
		
		
	     });			
	};
	
	
	
	$rootScope.logout=function()
	{
		console.log('Enter into the logout method');
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/logout',$scope.user)
//		
//		delete $rootScope.currentUser;
//		$cookieStore.remove('user');
//	   $location.path("/logout");
//     }
		.then(function(response)
		     	{
					console.log("Enter into logout function");
					console.log(response.status);
					$scope.user=response.data;
					$rootScope.currentUser=response.data;
					
				
					console.log($rootScope.currentUser.role)
						$cookieStore.remove('user');
						delete $rootScope.currentUser;
						$location.path("/logout");
						alert("Logout sucssfully");
						
				
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
	
	
	
});