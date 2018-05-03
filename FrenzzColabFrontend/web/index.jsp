
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>index.jsp</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
<script 
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-cookies.js"></script>
	
<script 
     src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.3/lodash.js"></script>
<script 
     src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.js"></script>
<script 
     src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.1/sockjs.js"></script>
     <link href="template/css/business-frontpage.css" rel="stylesheet">
     <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
	
<script src="js/MyRouteConfig.js"></script>
<script src="c_blog/BlogController.js"></script>
<script src="c_forum/ForumController.js"></script>
<script src="c_job/JobController.js"></script>
<script src="c_user/UserController.js"></script>
<script src="c_chat/ChatController.js"></script>
<script src="c_chat/ChatService.js"></script>
<script src="c_friend/FriendController.js"></script>


<style>
.navbar-brand {
	padding: 0px;
}

.navbar-brand>img {
	height: 160%;
	padding-bottom: 20px;
	width: auto;
}

.example3 .navbar-brand {
	height: 80px;
}

.example3 .nav>li>a {
	padding-top: 30px;
	padding-bottom: 30px;
}

.example3 .navbar-toggle {
	padding: 10px;
	margin: 25px 15px 25px 0;
}
.avatar {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

span {
	color: "#3399FF";
	font-size: 20px;
	font-style: italic;
}
</style>
</head>
<body ng-app="myApp">
	<div class="example3">
		<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar3">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href=" "><img src="images/Frenzzlogo.jpg"
					alt="FrenzzCollab logo"></a>
				<!-- <ul class="nav navbar-nav navbar-left">
       <li> <a class= "navbar-brand"><span style="color:#4C9900">FrenzzCollab</span></a></li></ul> -->
			</div>
			<ul class="nav navbar-nav navbar-left">
				<li class="active"><a href="#!home">Home</a></li>
				<li ng-hide="currentUser.role=='ROLEUSER'|| currentUser.role=='ROLEADMIN'"><a href="#!About Us">About Us</a></li>
				<li ng-hide="currentUser.role=='ROLEUSER'|| currentUser.role=='ROLEADMIN'"><a href="#!Contact Us">Contact Us</a></li>
			</ul>
			
			     <ul class="nav navbar-nav navbar-right">
			      	<li ng-hide="currentUser.role=='ROLEUSER'|| currentUser.role=='ROLEADMIN'"><a href="#!Register"><span class="glyphicon glyphicon-user"></span> Register</a></li>
			      <li ng-hide="currentUser.role=='ROLEUSER'|| currentUser.role=='ROLEADMIN'"><a href="#!login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                  
         </ul>
			     
				<div class="nav navbar-nav navbar-left" ng-hide="currentUser==undefined">
				<ul class="nav navbar-nav">
				
				
				
				<li ng-show="currentUser.role=='ROLEUSER'"><a href="#!blog">Blog</a></li>
			
				<li ng-show="currentUser.role=='ROLEUSER'||currentUser.role=='ROLEADMIN'"><a href="#!displayBlog">BlogList</a></li>
		          <li ng-show="currentUser.role=='ROLEUSER'"><a href="#!forum">Forum</a></li>
		           <li ng-show="currentUser.role=='ROLEUSER'"><a href="#!displayForum">ForumList</a></li>
		           <li ng-show="currentUser.role=='ROLEADMIN'"><a href="#!job">Job</a></li>
		           <li ng-show="currentUser.role=='ROLEADMIN'"><a href="#!displayJob">JobList</a></li>
		           <li ng-show="currentUser.role=='ROLEUSER'||currentUser.role=='ROLEADMIN'"><a href="#!uploadProfilepic">Update Profile</a></li>
		            <li ng-show="currentUser.role=='ROLEUSER'"><a href="#!searchJob">Job Search</a></li>
		             <li ng-show="currentUser.role=='ROLEUSER'"><a href="#!chat">Chat</a></li>
		                 <li ng-show="currentUser.role=='ROLEUSER'"><a href="#!friend">Friend</a></li>
		            </ul>
		            </div>
		            
		           <div class="nav navbar-nav navbar-right" ng-hide="currentUser==undefined">
				<ul class="nav navbar-nav">
				 <font color="white">Welcome {{currentUser.loginName}}</font>
				 		<img id="img1" class="avatar" src="http://localhost:8081/FrenzzColabMiddleWare/getImage/{{currentUser.loginName}}" width="20 height=20"></img>
		<form ng-controller="UserController"><input type="submit" value="logout" ng-click="logout()" class="btn btn-info btn-sm"/></form>
		</ul>
		</div>
		
				
		
		</div>
		</nav>
		<br><br>
		
	</div>

	<div ng-view>	</div>
	<br><br><br><br> <br><br><br><br> 
	<jsp:include page="footer.jsp" />


</body>
</html>
