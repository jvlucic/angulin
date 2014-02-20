'use strict';

/* Controllers */


var witbookerControllers = angular.module('witbooker.controllers', []);


witbookerControllers.controller('StepOne', ['$scope', '$stateParams','Api',
    function ($scope, $stateParams,Api) {

        var establishment=Api.Establishment.query(function(){
            $scope.establishments=establishment;
            console.log();
        });
    }]);

/*
witbookerServices.factory('StaticData', ['$resource',
    function ($resource) {
        var StaticDataResource = $resource(ESTABLISHMENT_RESOURCE_URL);
        var queryStaticData = function (next) {
            StaticDataResource.query({}, function (results) {
                var out = [];
                for (var establishment in results.staticData) {
                    out.push(Establishment(establishment));
                }
                next(out);
            });
        };
        return queryStaticData;
    }
*/