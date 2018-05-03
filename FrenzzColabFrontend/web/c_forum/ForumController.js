myApp.controller("ForumController",function($scope,$http,$location,$route)
{
	$scope.forum={"forumName":'',"forumContent":'',"createDate":'',"username":'',"status":''}
	$scope.forumComment={"forumId":'',"commentDate":'',"commentText":'',"userName":''}	
	
	
	$scope.forumdata;
	$scope.forumcomments;
	
	$scope.insertForum=function()
	{
		console.log("Enter into insertForum Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addForum',$scope.forum)
		.then(fetchAllForum(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
			scope.msg="Data inserted sucessfully";
		
	     });			
	};
	
	
	$scope.insertForumComments=function(forumId)
	{
		console.log("Enter into insertForumComments Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addForumComment/'+forumId,$scope.forumComment)
		.then(fetchAllForumComments(),function(response)
     	{
			$cookieStore.put('forumComment',response.data);
			console.log('Status Text:'+response.statusText);
		  $window.alert("comment inserted successfully");
		
	     });			
	};
	
	
	
	$scope.deleteForum=function(forumId)
	{
		console.log('Enter into the delete forum method');
		$http.delete('http://localhost:8081/FrenzzColabMiddleWare/deleteforum/'+forumId)
		.then(fetchAllForum(),function(response)
				{
			        console.log('Deleted');
			        $location.path("/displayForum");
				});
	};
	
	
	
	
	$scope.updateForum=function(forumId)
	{
		console.log('Enter into the update forum method');
		console.log(forumId);
		$http.put('http://localhost:8081/FrenzzColabMiddleWare/Updateforum/'+forumId,$scope.forum)
		.then(fetchAllForum(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			        $location.path("/displayForum");
			    	$route.reload();
			        
				});
	};
	

	
	$scope.editForum=function(forumId)
	{
		console.log('Enter into the edit forum method');
		$http.get('http://localhost:8081/FrenzzColabMiddleWare/getForumById/'+forumId)
		.then(function(response)
				{
			 console.log(response.data);
	          $scope.forum=response.data;
	        console.log('updated');
	        console.log('Status Text:'+response.statusText);
			        
				});
	};
	
	
	function fetchAllForum()
	{
		console.log('Fetching All Forums');
		$http.get("http://localhost:8081/FrenzzColabMiddleWare/listForums")
		.then(function(response)
				{
			            $scope.forumdata=response.data;
			          
				});
	}
	
	$scope.listforumComments = function(forumId){

		$http.get('http://localhost:8081/FrenzzColabMiddleWare/listForumComments/'+forumId)
		.then(function(response){
			console.log('In  forum comment ');
			console.log(forumId);
			$scope.forumcomments = response.data;	
			
		});
	};
	
	
	fetchAllForum();
	
});