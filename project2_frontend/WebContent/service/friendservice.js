/**
 * FriendService
 */
ngApp.factory('FriendService',function($http){
	var friendService={}
	
	friendService.listOfSuggestedUsers=function(){
		return $http.get("http://localhost:8085/project2_backend/getsuggestedusers")
	}
	friendService.friendRequest=function(toId){
		return $http.post("http://localhost:8085/project2_backend/friendrequest/"+toId)
	}
	friendService.listOfPendingRequests=function(){
		return $http.get("http://localhost:8085/project2_backend/getpendingrequests")
	}
	friendService.getUserDetails=function(fromId){
		return $http.get("http://localhost:8085/project2_backend/getuserdetails/"+fromId)
	}
	friendService.updatePendingRequest=function(pendingRequest){
		return $http.put("http://localhost:8085/project2_backend/updatependingrequest",pendingRequest)
	}
	friendService.getFriends=function(){
		return $http.get("http://localhost:8085/project2_backend/getfriends")
	}

	return friendService
})