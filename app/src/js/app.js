'use strict';

/**
 * @ngdoc overview
 * @name mortarApp
 * @description
 * # mortarApp
 *
 * Main module of the application.
 */
angular
    .module('mortarApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/login',
            })
            .when('/home', {
                // 首页
                templateUrl: 'views/home/index.html',
                controller: 'HomeCtrl',
            })
            .when('/login', {
                // 登录
                templateUrl: 'views/login/index.html',
                controller: 'LoginCtrl',
            })
            .when('/originalTest', {
                // 原始记录首页
                redirectTo: '/originalTest/cement/history',
                controller: 'CementOriginalTestCtrl',
            })
            .when('/originalTest/cement', {
                // 水泥原始记录
                redirectTo: '/originalTest/cement/history',
                controller: 'CementOriginalTestCtrl',
            })
            .when('/originalTest/cement/history', {
                templateUrl: 'views/originalTest/cement/cement.html',
                controller: 'CementOriginalTestCtrl',
            })
            .when('/originalTest/cement/input', {
                templateUrl: 'views/originalTest/cement/cement-input.html',
                controller: 'CementInputOriginalTestCtrl',
            })
            .when('/originalTest/fines', {
                // 细骨料原始记录
                redirectTo: '/originalTest/fines/history',
                controller: 'FinesOriginalTestCtrl',
            })
            .when('/originalTest/fines/history', {
                templateUrl: 'views/originalTest/fines/fines.html',
                controller: 'FinesOriginalTestCtrl',
            })
            .when('/originalTest/fines/input', {
                templateUrl: 'views/originalTest/fines/fines-input.html',
                controller: 'FinesInputOriginalTestCtrl',
            })
            .when('/originalTest/flyash', {
                // 粉煤灰原始记录
                redirectTo: '/originalTest/flyash/history',
                controller: 'FlyashOriginalTestCtrl',
            })
            .when('/originalTest/flyash/history', {
                templateUrl: 'views/originalTest/flyash/flyash.html',
                controller: 'FlyashOriginalTestCtrl',
            })
            .when('/originalTest/flyash/input', {
                templateUrl: 'views/originalTest/flyash/flyash-input.html',
                controller: 'FlyashInputOriginalTestCtrl',
            })
            .when('/originalTest/mineral', {
                // 矿粉原始记录
                redirectTo: '/originalTest/mineral/history',
                controller: 'MineralOriginalTestCtrl',
            })
            .when('/originalTest/mineral/history', {
                templateUrl: 'views/originalTest/mineral/mineral.html',
                controller: 'MineralOriginalTestCtrl',
            })
            .when('/originalTest/mineral/input', {
                templateUrl: 'views/originalTest/mineral/mineral-input.html',
                controller: 'MineralInputOriginalTestCtrl',
            })
            .when('/originalTest/mortar', {
                // 砂浆原始记录
                redirectTo: '/originalTest/mortar/history',
                controller: 'MortarOriginalTestCtrl',
            })
            .when('/originalTest/mortar/history', {
                templateUrl: 'views/originalTest/mortar/mortar.html',
                controller: 'MortarOriginalTestCtrl',
            })
            .when('/originalTest/mortar/input', {
                templateUrl: 'views/originalTest/mortar/mortar-input.html',
                controller: 'MortarInputOriginalTestCtrl',
            })
            .when('/originalTest/thickener', {
                // 保水增稠原始记录
                redirectTo: '/originalTest/thickener/history',
                controller: 'ThickenerOriginalTestCtrl',
            })
            .when('/originalTest/thickener/history', {
                templateUrl: 'views/originalTest/thickener/thickener.html',
                controller: 'ThickenerOriginalTestCtrl',
            })
            .when('/originalTest/thickener/input', {
                templateUrl: 'views/originalTest/thickener/thickener-input.html',
                controller: 'ThickenerInputOriginalTestCtrl',
            })
            .when('/otherRecords', {
                // 其它记录
                redirectTo: '/otherRecords/mixture',
                controller: 'MixtureRecordsCtrl',
            })
            .when('/otherRecords/mixture', {
                // 砂浆配合比试验记录
                templateUrl: 'views/otherRecords/mixture.html',
                controller: 'MixtureRecordsCtrl',
            })
            .when('/otherRecords/reserved', {
                // 砂浆留样记录
                templateUrl: 'views/otherRecords/reserved.html',
                controller: 'ReservedRecordsCtrl',
            })

            .when('/reportForms', {
                // 汇总报表首页
                redirectTo: '/reportForms/cement/history',
                controller: 'CementReportFormsCtrl',
            })
            .when('/reportForms/cement', {
                // 水泥汇总报表
                redirectTo: '/reportForms/cement/history',
                controller: 'CementReportFormsCtrl',
            })
            .when('/reportForms/cement/history', {
                templateUrl: 'views/reportForms/cement/cement.html',
                controller: 'CementReportFormsCtrl',
            })
            .when('/reportForms/cement/create', {
                templateUrl: 'views/reportForms/cement/cement-create.html',
                controller: 'CementCreateReportFormsCtrl',
            })
            .when('/reportForms/cement/history/detail', {
                templateUrl: 'views/reportForms/cement/cement-detail.html',
                controller: 'CementDetailReportFormsCtrl',
            })
            .when('/reportForms/fines', {
                // 细骨料汇总报表
                redirectTo: '/reportForms/fines/history',
                controller: 'FinesReportFormsCtrl',
            })
            .when('/reportForms/fines/history', {
                templateUrl: 'views/reportForms/fines/fines.html',
                controller: 'FinesReportFormsCtrl',
            })
            .when('/reportForms/fines/create', {
                templateUrl: 'views/reportForms/fines/fines-create.html',
                controller: 'FinesCreateReportFormsCtrl',
            })
            .when('/reportForms/fines/history/detail', {
                templateUrl: 'views/reportForms/fines/fines-detail.html',
                controller: 'FinesDetailReportFormsCtrl',
            })
            .when('/reportForms/flyash', {
                // 粉煤灰汇总报表
                redirectTo: '/reportForms/flyash/history',
                controller: 'FlyashReportFormsCtrl',
            })
            .when('/reportForms/flyash/history', {
                templateUrl: 'views/reportForms/flyash/flyash.html',
                controller: 'FlyashReportFormsCtrl',
            })
            .when('/reportForms/flyash/create', {
                templateUrl: 'views/reportForms/flyash/flyash-create.html',
                controller: 'FlyashCreateReportFormsCtrl',
            })
            .when('/reportForms/flyash/history/detail', {
                templateUrl: 'views/reportForms/flyash/flyash-detail.html',
                controller: 'FlyashDetailReportFormsCtrl',
            })
            .when('/reportForms/mineral', {
                // 矿粉汇总报表
                redirectTo: '/reportForms/mineral/history',
                controller: 'MineralReportFormsCtrl',
            })
            .when('/reportForms/mineral/history', {
                templateUrl: 'views/reportForms/mineral/mineral.html',
                controller: 'MineralReportFormsCtrl',
            })
            .when('/reportForms/mineral/create', {
                templateUrl: 'views/reportForms/mineral/mineral-create.html',
                controller: 'MineralCreateReportFormsCtrl',
            })
            .when('/reportForms/mineral/history/detail', {
                templateUrl: 'views/reportForms/mineral/mineral-detail.html',
                controller: 'MineralDetailReportFormsCtrl',
            })
            .when('/reportForms/mortar', {
                // 砂浆汇总报表
                redirectTo: '/reportForms/mortar/history',
                controller: 'MortarReportFormsCtrl',
            })
            .when('/reportForms/mortar/history', {
                templateUrl: 'views/reportForms/mortar/mortar.html',
                controller: 'MortarReportFormsCtrl',
            })
            .when('/reportForms/mortar/create', {
                templateUrl: 'views/reportForms/mortar/mortar-create.html',
                controller: 'MortarCreateReportFormsCtrl',
            })
            .when('/reportForms/mortar/history/detail', {
                templateUrl: 'views/reportForms/mortar/mortar-detail.html',
                controller: 'MortarDetailReportFormsCtrl',
            })
            .when('/reportForms/thickener', {
                // 保水增稠汇总报表
                redirectTo: '/reportForms/thickener/history',
                controller: 'ThickenerReportFormsCtrl',
            })
            .when('/reportForms/thickener/history', {
                templateUrl: 'views/reportForms/thickener/thickener.html',
                controller: 'ThickenerReportFormsCtrl',
            })
            .when('/reportForms/thickener/create', {
                templateUrl: 'views/reportForms/thickener/thickener-create.html',
                controller: 'ThickenerCreateReportFormsCtrl',
            })
            .when('/reportForms/thickener/history/detail', {
                templateUrl: 'views/reportForms/thickener/thickener-detail.html',
                controller: 'ThickenerDetailReportFormsCtrl',
            })
            .when('/leaveFactory', {
                // 出厂
                redirectTo: '/leaveFactory/inspection',
                controller: 'InspectionCtrl',
            })
            .when('/leaveFactory/inspection', {
                // 砂浆出厂检验报告
                templateUrl: 'views/leaveFactory/inspection.html',
                controller: 'InspectionCtrl',
            })
            .when('/leaveFactory/invoiceNum', {
                // 砂浆出厂情况汇总（按发货单号）
                templateUrl: 'views/leaveFactory/invoiceNum.html',
                controller: 'InvoiceNumCtrl',
            })
            .when('/leaveFactory/batchNum', {
                // 砂浆出厂情况汇总（按砂浆批号）
                templateUrl: 'views/leaveFactory/batchNum.html',
                controller: 'BatchNumCtrl',
            })
            .when('/workNotice', {
                // 通知单
                redirectTo: '/workNotice/material',
                controller: 'MaterialNoticeCtrl',
            })
            .when('/workNotice/material', {
                // 原料进厂通知单
                templateUrl: 'views/workNotice/material.html',
                controller: 'MaterialNoticeCtrl',
            })
            .when('/workNotice/mixSingle', {
                // 配合比（单一型）通知单
                templateUrl: 'views/workNotice/mixSingle.html',
                controller: 'MixSingleNoticeCtrl',
            })
            .when('/workNotice/mixTotal', {
                // 配合比（汇总型）通知单
                templateUrl: 'views/workNotice/mixTotal.html',
                controller: 'MixTotalNoticeCtrl',
            })
            .when('/workNotice/sendOut', {
                // 砂浆出厂通知单
                templateUrl: 'views/workNotice/sendOut.html',
                controller: 'SendOutNoticeCtrl',
            })
            .when('/setting', {
                // 系统管理
                redirectTo: '/setting/user',
                controller: 'UserSettingCtrl',
            })
            .when('/setting/user', {
                // 用户管理
                templateUrl: 'views/setting/user.html',
                controller: 'UserSettingCtrl',
            })
            .when('/setting/authority', {
                // 系统设置
                templateUrl: 'views/setting/authority.html',
                controller: 'AuthoritySettingCtrl',
            })
            .when('/setting/company', {
                // 系统设置
                templateUrl: 'views/setting/company.html',
                controller: 'CompanySettingCtrl',
            })
            .when('/404', {
                templateUrl: '404.html',
                controller: ''
            })
            .when('/402', {
                templateUrl: 'authError.html',
                controller: ''
            })
            .otherwise({
                redirectTo: '/404',
            });
    });
