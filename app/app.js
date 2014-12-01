'use strict';

// Declare app level module which depends on views, and components
angular.module('primate', [
  'ngRoute',
  'primate.manifests',
  'primate.view2',
  'primate.version',
  'primateServices'
]).
config(['$routeProvider', 
	function($routeProvider) {
  		$routeProvider.otherwise({redirectTo: '/manifests'});
	}]);
