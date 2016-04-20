'use strict';

/**
 *
 * @ngdoc overview
 * @name configApp
 * @description configApp模块控制
 * # configApp
 *
 * Created by yangdeng on 16/4/20.
 */
(function(){

	angular.module('configApp',[
		'httpInterceptor',
		'noCacheInterceptor',
		'routeConfig',
		'tipConfig',
		'httpConfig'
	]);

})();