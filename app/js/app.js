'use strict';



// Declare app level module which depends on filters, and services
angular.module('witbooker', [
        'ui.router',
        'ui.bootstrap',
        'witbooker.filters',
        'witbooker.directives',
        'witbooker.controllers',
        'witbookerServices'
    ]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('stepOne', {
                url: "/stepOne",
                templateUrl: "partials/step_one.html",
                controller:"StepOne"
            })
            .state('step1.list', {
                url: "/list",
                templateUrl: "partials/state1.list.html",
                controller: function ($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('step2', {
                url: "/step2",
                templateUrl: "partials/state2.html"
            })
            .state('step2.list', {
                url: "/list",
                templateUrl: "partials/state2.list.html",
                controller: function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
    }]);
