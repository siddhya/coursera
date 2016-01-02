'use strict';

angular.module('confusionApp')

.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    this.getDishes = function() {

        return $resource(baseURL + "dishes/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

    };

    // implement a function named getPromotion
    // that returns a selected promotion.
    this.getPromotion = function() {
        return $resource(baseURL + "promotions/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    };

}])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    var corpfac = {};

    corpfac.getLeaders = function() {
        return $resource(baseURL + "leadership/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    };

    return corpfac;

}])

.factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    var fbfac = {};

    fbfac.getfeedback = function() {
        return $resource(baseURL + "feedback", null, {
            'update': {
                method: 'PUT'
            }
        });
    };

    return fbfac;

}]);