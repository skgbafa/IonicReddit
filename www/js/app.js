// to prevent the app variable from being in the global namespace, we wrap it in an anonymous function 
// immediately call it so the code is executed

// a crontroller is where we setup the data that we want to deplay in the view (html)

(function() {
var app = angular.module('myreddit', ['ionic'])

// controller
// angular provides an $http service
app.controller('RedditCtrl', function ($http, $scope) {
	// angular does dependecy injection: whenever you need a service (like $scope), you just need to declare it 
	// as a parameter to your controller function

	// on $scope you can declare params
	$scope.stories = [];
	$http.get('https://www.reddit.com/r/android/new/.json')
		.success(function (reponse) {
			 angular.forEach(reponse.data.children, function(child){
				$scope.stories.push(child.data)
			 })
		})
	
})

app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

}());