'use strict';

/**
 * @ngdoc overview
 * @name smallDemoApp
 * @description
 * # smallDemoApp
 *
 * Main module of the application.
 */
angular
	.module('smallDemoApp', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngSanitize',
		'ngTouch',
		'ui.router',

		'commonNavApp',

		'routeConfig'


	]);
