'use strict';

/**
 * @ngdoc function
 * @name serverApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the serverApp
 */
angular.module('serverApp')
	.controller('AboutCtrl', function($scope, $auth) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.logout = function() {
			$auth.signOut();
		};
	});