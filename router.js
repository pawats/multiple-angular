angular.module('mainrouter',['ngRoute'])
	.config(['$locationProvider', '$routeProvider',
	    function config($locationProvider, $routeProvider) {
		// $locationProvider.hashPrefix('!');
		// http://stackoverflow.com/questions/14319967/angularjs-routing-without-the-hash
		$locationProvider.html5Mode(true)

	      $routeProvider
	      	.when('/', {
	      		// templateUrl: 'index.html'
	      		redirectTo: '/app1'
	      	})
	      	.when('/index',{
	      		templateUrl: 'index.html'
	      	})
	        .when('/app1', {
			    controller : function(){
			        window.location.replace('/app1/');
			    }, 
			    template : "<div></div>"
			})
	        .when('/app2',{
			    controller : function(){
			        window.location.replace('/app2/');
			    }, 
			    template : "<div></div>"
			})
	        .otherwise('/');
	    }
	]);