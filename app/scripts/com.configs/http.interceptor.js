'use strict';

/**
 *
 * @ngdoc overview
 * @name httpInterceptor
 * @description http拦截器
 * # httpInterceptor
 *
 * Created by yangdeng on 16/4/20.
 */

(function () {

	var httpInterceptor = function (toaster, $q) {

		return {
			'requestError': function (rejection) {
				if (rejection.status === 500) {
					toaster.error('请求参数错误');
				}
				else if(rejection.status === 404){
					toaster.error('请求不存在');
				}
				else{
					toaster.error('错误请求');
				}
				return $q.reject(rejection);
			},
			'responseError':function(rejection){
				if(rejection.status === 503){
					toaster.error('服务端异常');
				}
				else if (rejection.status === 404){
					toaster.error('访问地址不存在');
				}
				else{
					toaster.error('未知错误');
				}

				return $q.reject(rejection);
			}
		};

	};

	httpInterceptor.$inject = ['toaster', '$q'];

	angular.module('httpInterceptor', [])
		.factory('httpInterceptor', httpInterceptor);

})();