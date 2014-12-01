'use strict';

angular.module('primate.manifests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/manifests', {
     templateUrl: 'manifests/manifests.html',
     controller: 'manifestsCtrl'
    }).
    when('/manifests/:manifestId', {
        templateUrl: 'manifests/manifest-detail.html',
        controller: 'manifestDetailCtrl'
    });
}])

.controller('manifestsCtrl', ['$scope', 'Manifests', function($scope, Manifests) {
  $scope.collection = Manifests.query();

}])

.controller('manifestDetailCtrl', ['$scope', '$routeParams', 'Manifest', 
	function($scope, $routeParams, Manifest) {
     // $scope.manifests = Manifest.query();
     
     $scope.manifest = Manifest.get({id: $routeParams.manifestId + ".json"}, function() {
    	console.log($scope.manifest);
  	  });
/*
    $scope.manifest = Manifest.get({manifestId: $routeParams.manifestId}, function(manifest) {
      console.log("foo");
    }]);
*/

  }]);