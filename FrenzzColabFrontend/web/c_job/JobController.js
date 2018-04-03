myApp.controller("JobController",function($scope,$http,$location)
{
	$scope.job={"company":'',"jobDesc":'',"jobDesignation":'',"lastDateApply":'',"location":'',"salary":''}
		
	
	$scope.jobdata;
	
	$scope.insertJob=function()
	{
		console.log("Enter into insertjob Method");
		$http.post('http://localhost:8081/FrenzzColabMiddleWare//addJob',$scope.job)
		.then(fetchAllJob(),function(response)
     	{
			console.log('Status Text:'+response.statusText);
			scope.msg="Data inserted sucessfully";
		
	     });			
	};
	
	
	
	$scope.deleteJob=function(jobId)
	{
		console.log('Enter into the delete job method');
		$http.delete('http://localhost:8081/FrenzzColabMiddleWare//deletejob/'+jobId)
		.then(fetchAllJob(),function(response)
				{
			        console.log('Deleted');
			        $location.path("/displayJob");
				});
	};
	
	
	
	
	/*$scope.updateBlog=function(blogId)
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
	*/
	
	
	
	function fetchAllJob()
	{
		console.log('Fetching All Jobs');
		$http.get("http://localhost:8081/FrenzzColabMiddleWare/listJobs")
		.then(function(response)
				{
			            $scope.jobdata=response.data;
				});
	}
	
	
	
	
	fetchAllJob();
	
});