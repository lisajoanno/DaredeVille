'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('trigunale', [
    'ngRoute',
    'trigunale.curiculum',
    'trigunale.jdr'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl: "home.html",
          controller: ""
      })
      .when("/itinerary", {
          templateUrl: "views/itinerary.html",
          controller: "itineraryCtrl"
      })
      .when("/dangers", {
          templateUrl: "views/dangers.html",
          controller: "dangersCtrl"
      })
      .otherwise({
          redirectTo: '/'
      });

}]);
