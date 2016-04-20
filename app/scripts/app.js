'use strict';

/**
 * @ngdoc overview
 * @name smallDemoApp
 * @description
 * # smallDemoApp
 *
 * Main module of the application.
 */
(function(){

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
			'toastr',
			'toaster',

			'configApp',
			'commonNavApp'
		]);

})();

