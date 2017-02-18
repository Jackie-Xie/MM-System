'use strict';

angular.module('mortarApp')
    .service('AjaxServer', function ($location, $http, $cookieStore, $rootScope) {
        this.ajaxInfo = function (config, fnSuccess, fnFail) {
            if (!config || !config.url || '' === config.url) {
                console.log('ajax config error');
                return false;
            }
            if (config.url.indexOf('login') < 0) {
                config.data.authorName = $rootScope.username;
                config.data.authorId = $rootScope.userId;
                //config.data.sessionId = $rootScope.sessionId;
            }
            //console.log(config);

            $http({
                method: config.method || 'get',
                data: config.data || '',
                params: config.method === 'get' ? config.data || '' : '',
                responseType: config.responseType || 'json',
                url: config.url
            }).success(function (data) {
                data = data || {};
                if (data.errorCode) {
                    if (data.errorCode === '401') {
                        $location.path('/login');
                    }
                    if (data.errorCode === '402') {
                        $location.path('/404');
                    }
                } else {
                    if (fnSuccess) {
                        fnSuccess(data);
                    } else {
                        console.log(data);
                    }
                }

            }).error(function (data, header, config, status) {
                data = data || {};
                if (data.errorCode) {

                    if (data.errorCode === '401') {
                        $location.path('/login');
                    }
                    if (data.errorCode === '402') {
                        $location.path('/402');
                        if (fnSuccess) {
                            fnSuccess(data);
                        }
                    }
                } else {
                    if (fnFail) {
                        fnFail(status);
                    } else {
                        console.log(status);
                    }
                }
            });
        };


    });
