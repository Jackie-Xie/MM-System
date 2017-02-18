'use strict';

angular.module('mortarApp')
    .controller('LoginCtrl', function ($scope,$cookieStore, $location, $timeout, AjaxServer) {
        
        var viewWidth = $(window).width(),
            viewHeight = $(window).height();
        /*
         *  初始化页面
         */
        $scope.init = function () {
            $scope.loginData = {};
            $scope.errorMsg = '';
            $scope.resetRender();

            //分辨率改变
            $(window).on('resize', function () {
                $scope.resetRender();
            });

        };

        /*
         * 监听回车键
         */
        $scope.checkKeyup = function(e){
            var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
                $scope.clickLogin();
            }
        };

        /*
         * 页面重绘
         */
        $scope.resetRender = function () {
            $('.login-container').css('height', viewHeight);
            $('.login-body').css({
                'height': viewHeight - 200,
                'padding-top': (viewHeight - 606) / 2
            });
        };

        /*
         * 点击登录
         */
        $scope.clickLogin = function () {
            if($scope.loginValidate()){
                $cookieStore.put('username',$scope.loginData.username);
                $location.path('/reportForms/cement/history');
            }
        };

        /*
         * 登录验证
         */
        $scope.loginValidate = function () {
            if($scope.loginData.enterprise != 'mm' || $scope.loginData.username != 'admin' || $scope.loginData.pwd != 'admin'  ){
                $scope.errorMsg = '企业名、用户名、密码错误或者不存在';
                $scope.apply();
                return false;
            }
            else{
                return true;
            }
        };

        $scope.apply = function () {
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };
    });
