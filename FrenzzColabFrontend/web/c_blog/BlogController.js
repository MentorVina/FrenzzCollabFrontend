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