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
	     });			
	};
	
	function fetchAllBlog()
	{
		console.log('Fetching All Blogs');
		$http.get("http://localhost:8081/FrenzzColabMiddleWare/listBlogs")
		.then(function(response)
				{
			            $scope.blogdata=response.data;
				});
	};
	
});