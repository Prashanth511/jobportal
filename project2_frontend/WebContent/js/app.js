/**
 * Angular Js module
 */
var ngApp=angular.module("ngApp",['ngRoute','ngCookies'])
ngApp.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/registration',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/editprofile',{
		templateUrl:'views/updateprofile.html',
		controller:'UserController'
	})
	.when('/savejob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
		
	})
	.when('/getalljobs',{
		templateUrl:'views/jobtitles.html',
		controller:'JobController'
		
	})
	.when('/saveblogpost',{
		templateUrl:'views/blogpostform.html',
		controller:'BlogPostController'
	})
	.when('/getallblogs',{
		templateUrl:'views/listofblogposts.html',
		controller:'BlogPostController'
	})
	.when('/getblogpostbyid/:id',{
		templateUrl:'views/blogpostdetails.html',
		controller:'BlogPostDetailController'
	})
	.when('/approveblogpost/:id',{
		templateUrl:'views/blogpostapprovalform.html',
		controller:'BlogPostDetailController'
	})
	.when('/uploadprofilepic',{
		templateUrl:'views/profilepicture.html'
	})
	.when('/suggesteduserslist',{
		templateUrl:'views/listofsuggestedusers.html',
		controller:'FriendController'
	})
	.when('/pendingrequests',{
		templateUrl:'views/listofpendingrequests.html',
		controller:'FriendController'
	})
	.when('/getUserDetails/:fromId',{
		templateUrl:'views/userdetails.html',
		controller:'FriendDetailController'
	})
	.when('/getfriends',{
		templateUrl:'views/listoffriends.html',
		controller:'FriendController'
	})
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatCtrl'
	})


	.otherwise({
		templateUrl:'views/home.html'
	})
		
})
ngApp.run(function($rootScope,$cookieStore,UserService,$location){
	$rootScope.logout=function(){
		UserService.logout().then(function(response){
			delete $rootScope.currentUser;
			$cookieStore.remove('currentUser')
			$location.path('/login')
		},function(response){
			
		 console.log(response.status)
		
		})
	}
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get('currentUser')
	
})
	
