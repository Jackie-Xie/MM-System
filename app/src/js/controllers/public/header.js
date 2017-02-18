'use strict';

angular.module('mortarApp')
    .controller('NavCtrl', function ($scope,$cookieStore,$location) {
        var username = '',
            $modifyModal = null,
            viewWidth = $(window).width(),
            viewHeight = $(window).height();
        $scope.pathStr = '';

        $scope.init = function () {
            $scope.headerUser = '';
            $modifyModal = $('#J_modifyModal');
            $scope.pathStr = $location.path();
            $scope.resetRender();
            //console.log($scope.pathStr);

            // 页面跳转后自动清除定时刷新，节省浏览器资源
            $('body').on('click', '.nav li', function (ev) {
                var it = $(ev.currentTarget);

                if ($scope.stopRefresh) {
                    $scope.stopRefresh();
                }
            });

            //分辨率改变
            $(window).on('resize', function () {
                $scope.resetRender();
            });

            username = $cookieStore.get('username');
            $scope.validLogin();

            $scope.formatModals();
        };

        /*
         * 验证用户是否登录
         */
        $scope.validLogin = function () {
            if(!!username){
                $scope.headerUser = username;
            }
            else{
                $location.path('/login');
            }
        };

        /*
         * 用户注销
         */
        $scope.logout = function () {
            if(!!username){
                $cookieStore.remove('username');
            }
            $location.path('/login');
        };

        /*
         * 修改密码
         */
        $scope.modifyPwd = function () {
            
        };

        /*
         * 页面重绘
         */
        $scope.resetRender = function () {
            $('html').css('font-size', viewWidth * 20 / 1366 + 'px');
            $('.wrap').css('height', viewHeight - 50);
        };

        /*
         *  初始化模态框
         */
        $scope.formatModals = function () {
            $scope.hideModal($modifyModal);
        };

        $scope.showModal = function (modal) {
            modal.modal('show');
        };

        $scope.hideModal = function (modal) {
            modal.modal('hide');
        };

        $scope.apply = function () {
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };
    });
