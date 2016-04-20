'use strict';

/**
 *
 * @ngdoc overview
 * @name httpConfig
 * @description http拦截器
 * # httpConfig
 *
 * Created by yangdeng on 16/4/20.
 */
(function(){

	var httpConfig = function($httpProvider){

		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		$httpProvider.interceptors.push('noCacheInterceptor');
		$httpProvider.interceptors.push('httpInterceptor');
	};

	httpConfig.$inject = ['$httpProvider'];

	angular.module('httpConfig',[])
		.config(httpConfig);

})();