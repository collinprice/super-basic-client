'use strict';

/**
 * @ngdoc overview
 * @name serverApp
 * @description
 * # serverApp
 *
 * Main module of the application.
 */
angular
	.module('serverApp', [
		'ui.router',
		'ngSanitize',
		'ng-token-auth'
	])
	.config(function($stateProvider, $authProvider) {

		$authProvider.configure({
			apiUrl: 'http://localhost:9000'
		});

		$stateProvider
			.state('index', {
				url: '/',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'views/register.html',
				controller: 'RegisterCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				resolve: {
					auth: function($auth) {
						return $auth.validateUser();
					}
				}
			})
	})
	.run(['$rootScope', '$location',
		function($rootScope, $location) {
			var path = function() {
				return $location.path();
			};
			$rootScope.$watch(path, function(newVal, oldVal) {
				$rootScope.activetab = newVal;
			});
		}
	]);