'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var witbookerServices = angular.module('witbookerServices', ['ngResource']);
var ESTABLISHMENT_RESOURCE_URL = 'test_data/static_data.json';


var api = function ($resource) {

    var Establishment = $resource(ESTABLISHMENT_RESOURCE_URL, {},
        {   'get': {method: 'GET'},
            'save': {method: 'POST'},
            'query': {method: 'GET', isArray: true},
            'remove': {method: 'DELETE'},
            'delete': {method: 'DELETE'}
        }
    );
    /*Write additional methods */
    Establishment.prototype.testMethod=function(){
        return ""
    }

    return {
        Establishment: Establishment
    }

}

witbookerServices.factory("Api", api);
