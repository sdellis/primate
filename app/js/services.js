
var primateServices = angular.module('primateServices', ['ngResource']);

primateServices.factory('Manifest', ['$resource',
  function($resource){
  	return $resource('data/manifests/:id');
  	/*
    return $resource('data/manifests/:id', {}, {
      query: {method:'GET', isArray:true}
    });
	*/
  }]);

primateServices.factory('Manifests', ['$resource',
  function($resource){
  	//return $resource('data/collection.json');

	return $resource('data/collection.json', {}, {
      query: {method:'GET', isArray:false}
    });

  }]);