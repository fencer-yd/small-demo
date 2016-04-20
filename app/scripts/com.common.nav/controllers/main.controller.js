'use strict';

/**
 * @ngdoc overview
 * @name commonNavMainCtrl
 * @description 导航
 * # commonNavMain
 *
 * Created by yangdeng on 16/4/20.
 */

(function () {

	var commonNavMainCtrl = function ($timeout,commonFullpageConfig) {

		$timeout(function(){
			$('#my_nav').fullpage(commonFullpageConfig.config);
		});
	};

	commonNavMainCtrl.$inject = ['$timeout','commonFullpageConfig'];

	angular.module('commonNavMain', [])
		.controller('commonNavMainCtrl', commonNavMainCtrl);

})();