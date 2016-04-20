'use strict';

/**
 *
 * @ngdoc overview
 * @name tipConfig
 * @description 提示信息配置
 * # tipConfig
 *
 * Created by yangdeng on 16/4/20.
 */
(function(){

	var tipConfig = function(toastrConfig){

		var thisConfig = {
			allowHtml: false,
			closeButton: true,
			closeHtml: '<button>&times;</button>',
			extendedTimeOut: 1000,
			iconClasses: {
				error: 'toast-error',
				info: 'toast-info',
				success: 'toast-success',
				warning: 'toast-warning'
			},
			messageClass: 'toast-message',
			onHidden: null,
			onShown: null,
			onTap: null,
			progressBar: true,
			tapToDismiss: true,
			templates: {
				toast: 'views/plugin/tip/toast.html',
				progressbar: 'views/plugin/tip/progressbar.html'
			},
			timeOut: 5000,
			titleClass: 'toast-title',
			toastClass: 'toast'
		};

		angular.extend(toastrConfig, thisConfig);

	};

	tipConfig.$inject = ['toastrConfig'];

	angular.module('tipConfig',[])
		.config(tipConfig);

})();