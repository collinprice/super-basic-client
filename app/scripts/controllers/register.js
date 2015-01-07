'use strict';

/**
 * @ngdoc function
 * @name serverApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the serverApp
 */
angular.module('serverApp')
	.controller('RegisterCtrl', function($scope, $auth) {
		$scope.register = function() {
			$auth.submitRegistration($scope.registrationForm)
				.then(function(resp) {
					console.log(resp);
				})
				.catch(function(resp) {
					console.log(resp);
				});
		};
	});