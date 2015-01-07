'use strict';

/**
 * @ngdoc function
 * @name serverApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the serverApp
 */
angular.module('serverApp')
	.controller('MainCtrl', function($scope, $auth) {
		$scope.login = function() {
			$auth.submitLogin($scope.loginForm)
				.then(function(response) {
					console.log(response);
				})
				.catch(function(response) {
					console.log(response);
				});
		}
	});