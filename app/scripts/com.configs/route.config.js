'use strict';

/**
 *
 * @ngdoc overview
 * @name routeConfig
 * @description 路由配置
 * # routeConfig
 *
 * Created by yangdeng on 16/4/20.
 */

(function () {

	var routeConfig = function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'views/com.common.nav/main.html',
				controller: 'commonNavMainCtrl'
			});
	};

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	angular.module('routeConfig', [])
		.config(routeConfig);

})();