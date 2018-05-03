myApp.controller("BlogController",function($scope,$http,$location,$window,$route)
{
	$scope.blog={"blogName":'',"blogContent":'',"createDate":'',"likes":0,"username":'',"status":''}
	$scope.blogComment={"blogId":'',"commentDate":'',"commentText":'',"username":''}

	
	
	$scope.blogdata;
	$scope.blogcomments;
	
	$scope.insertBlog=function()
	{
		console.log("Enter into insertBlog Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addBlog',$scope.blog)
		.then(fetchAllBlog(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
		  $window.alert("Data inserted successfully");
		
	     });			
	};
	
	
	
	$scope.insertBlogComments=function(blogId)
	{
		console.log("Enter into insertBlogComments Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare/addBlogComment/'+blogId,$scope.blogComment)
		.then(fetchAllBlogComments(),function(response)
     	{
			$cookieStore.put('blogComment',response.data);
			console.log('Status Text:'+response.statusText);
		  $window.alert("comment inserted successfully");
		
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
		$http.put('http://localhost:8081/FrenzzColabMiddleWare/Update/'+blogId,$scope.blog)
		.then(fetchAllBlog(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			        $location.path("/displayBlog");
			    	$route.reload();
			        
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
			        //$location.path("/displayBlog");
			        
				});
	};
	
	
	
	$scope.approveBlog=function(blogId)
	{
		console.log('Enter into the approve blog method');
		console.log(blogId);
		$http.put('http://localhost:8081/FrenzzColabMiddleWare/approve/'+blogId,$scope.blog)
		.then(fetchAllBlog(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			      
			        
				});
	};
	
	
	
	$scope.rejectBlog=function(blogId)
	{
		console.log('Enter into the reject blog method');
		console.log(blogId);
		$http.put('http://localhost:8081/FrenzzColabMiddleWare/rejectBlog/'+blogId,$scope.blog)
		.then(fetchAllBlog(),function(response)
				{
			
			        console.log('Status Text:'+response.statusText);
			      
			        
				});
	};
	
	
	
	
	$scope.incrementLike=function(blogId)
	{
            	console.log('Enter into the incrementLike blog method');
		        $http.get('http://localhost:8081/FrenzzColabMiddleWare/incrementLikes/'+blogId)
		.then( fetchAllBlog(),function(response)
		{
			  console.log('Incerement like'+blogId);
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
	};
	
	$scope.listblogComments = function(blogId){

		$http.get('http://localhost:8081/FrenzzColabMiddleWare/listBlogComments/'+blogId)
		.then(function(response){
			console.log('In edit blog');
			console.log(blogId);
			$scope.blogcomments = response.data;			
			
		});
	};
	
	$scope.deleteBlogComment = function(commentId){
		$http.delete('http://localhost:8081/FrenzzColabMiddleWare/deleteBlogComment/'+commentId)
		.then(fetchAllBlog(), function(response){
			
		    console.log('Response Status ' + response.statusText);
		    $route.reload();
			
			
		});
	};
	
	
	/*function fetchAllBlogComments()
	{
		console.log('Fetching All Blogs Comments');
		$http.get("http://localhost:8081/FrenzzColabMiddleWare/listBlogComments")
		.then(function(response)
				{
			            $scope.blogcomments=response.data;
			          
				});
	}*/
	
	
	
	fetchAllBlog();
	
	
	
	
	
});