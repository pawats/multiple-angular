angular.module('app1',['ngRoute'])
	.config(['$locationProvider', '$routeProvider',
	    function config($locationProvider, $routeProvider) {

			// $locationProvider.hashPrefix('!');
			// $locationProvider.html5Mode(true)
	      $routeProvider
	      	.when('/', {
	      		templateUrl: 'index'
	      	})
	        .when('/about', {
	          templateUrl: 'about',
	          controller: 'aboutController'
	        })
	        // .when('/faq', {
	        //   templateUrl: 'faq'
	        // })
	        .otherwise('/');
	    }
	])

	.controller('aboutController', function($scope){

	})

	// .directive('menu',)