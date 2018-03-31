myApp.controller("BlogController",function($scope,$http,$location)
{
	$scope.blog={"blogName":'',"blogContent":'',"createDate":'',"likes":0,"username":'',"status":''}
		
	
	
	$scope.blogdata;
	
	$scope.insertBlog=function()
	{
		console.log("Enter into insertBlog Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addBlog',$scope.blog)
		.then(fetchAllBlog(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
			scope.msg="Data inserted sucessfully";
		
	     });			
	};
	
	
	
	$scope.deleteBlog=function(blogId)
	{
		console.log('Enter into the delete blog method');
		$http.delete('http://localhost:8081/FrenzzColabMiddleWare/delete/'+blogId)
		.then(fetchAllBlog(),function(response)
				{
			        console.log('Deleted');
			        $location.path("/displayBlog");
				});
	};
	
	
	
	
	$scope.updateBlog=function(blogId)
	{
		console.log('Enter into the update blog method');
		console.log(blogId);
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/Update/'+blogId)
		.then(fetchAllBlog(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			        $location.path("/displayBlog");
			        
				});
	};
	
	
	
	
	$scope.editBlog=function(blogId)
	{
		console.log('Enter into the edit blog method');
		$http.get('http://localhost:8081/FrenzzColabMiddleWare/getById/'+blogId)
		.then(function(response)
				{
			  console.log(response.data);
			          $scope.blog=response.data;
			        console.log('updated');
			        console.log('Status Text:'+response.statusText);
			        $location.path("/updateBlog");
			        
				});
	};
	
	$scope.incrementLike=function(blogId)
	{
            	console.log('Enter into the incrementLike blog method');
		        $http.get('http://localhost:8081/FrenzzColabMiddleWare/incrementLikes/'+blogId)
		.then( fetchAllBlog(),function(response)
		{
			  console.log('Incerement');
			  $location.path("/displayBlog");
			         
			        
				});
	}
	
	
	
	function fetchAllBlog()
	{
		console.log('Fetching All Blogs');
		$http.get("http://localhost:8081/FrenzzColabMiddleWare/listBlogs")
		.then(function(response)
				{
			            $scope.blogdata=response.data;
				});
	}
	
	
	
	
	fetchAllBlog();
	
});