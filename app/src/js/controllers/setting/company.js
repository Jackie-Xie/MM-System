'use strict';

angular.module('mortarApp')
    .controller('CompanySettingCtrl', function ($scope, $location, $timeout, AjaxServer) {
        $scope.pathStr = '';
        var config = {},
            defaultPager = {
                curPage: 1,
                pageSize: 10,
                pagesNum: 10,
                total: 100
            },
            apiGetCementTable = '/cement/getTableHistoryList',

            testTableData = [{
                reportName: '某某报表',
                typeRank: 'A-22',
                statisTime: '2016.05-2016.11',
                totalNum: 3000,
                groupNum: 10,
                max: 200,
                min: 150,
                range: 50,
                average: 180,
                standardDeviation: 0.2,
                aggPerson: '小明',
                aggTime: '2016-05-21 15:20:45'
            },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某公司第三季度营业额报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某公司第三季度营业额报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某公司第三季度营业额报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                },
                {
                    reportName: '某某公司第三季度营业额报表',
                    typeRank: 'A-22',
                    statisTime: '2016.05-2016.11',
                    totalNum: 3000,
                    groupNum: 10,
                    max: 200,
                    min: 150,
                    range: 50,
                    average: 180,
                    standardDeviation: 0.2,
                    aggPerson: '小明',
                    aggTime: '2016-05-21 15:20:45'
                }];


        /*
         *  初始化页面
         */
        $scope.init = function () {
            $scope.pathStr = $location.path();
            $scope.statusMsg = '';
            $scope.cementTableList = [];
            $scope.cementReportForm = {};
            $scope.pager = $.extend({}, defaultPager);
            $scope.pager.pageSize = '20';

            $scope.getTableData();

            $scope.bindEvent();
        };

        /*
         *  绑定事件
         */
        $scope.bindEvent = function () {
            $scope.formatScrollBar();

            /* 分页事件 */
            $('.wrap').on('click', '.j-navPager .item', function (ev) {
                var it = $(ev.currentTarget);
                $scope.gotoPage(parseInt(it.text()));
            }).on('click', '.j-navPager .prev', function (ev) {
                if ($scope.pager.curPage <= 1) {
                    return false;
                }
                $scope.gotoPage($scope.pager.curPage - 1);
            }).on('click', '.j-navPager .next', function (ev) {
                if ($scope.pager.curPage >= $scope.pager.pagesNum) {
                    return false;
                }
                $scope.gotoPage($scope.pager.curPage + 1);
            });
        };

        /*
         *  跳转页面
         */
        $scope.gotoPage = function (targetPage) {
            //console.log(targetPage);
            $scope.pager.curPage = parseInt(targetPage);
            // todo:获取数据
            $scope.getTableData();
        }

        /*
         *  初始化滚动条
         */
        $scope.formatScrollBar = function () {
            $.mCustomScrollbar.defaults.scrollButtons.enable = true;
            $('.wrap').mCustomScrollbar({
                scrollbarPosition: "inside",
                scrollInertia: 550,
                theme: 'gray-light'
            });
        };

        /*
         * 获取表格数据
         */
        $scope.getTableData = function () {
            // $scope.statusMsg = 'loading';
            config = {
                method: 'get',
                data: {
                    reportName: $scope.cementReportForm.reportName,
                    typeRank: $scope.cementReportForm.typeRank,
                    aggPerson: $scope.cementReportForm.aggPerson,
                },
                url: apiGetCementTable + '?curPage=' + $scope.pager.curPage + '&pageSize=' + parseInt($scope.pager.pageSize)
            };

            AjaxServer.ajaxInfo(config, function (data) {

                },
                function (error) {

                });

            $scope.cementTableList = $.extend([], testTableData);
        };

        /*
         *  响应添加按钮
         */
        $scope.clickAdd = function (addModal) {
            $scope.formatModals();
            $scope.showAddModal(addModal);
        };

        /*
         *  初始化模态框
         */
        $scope.formatModals = function () {
            console.log('formatModals');
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
