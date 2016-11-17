'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('daredeville', [
    'ngRoute',
    'daredeville.dangers',
    'daredeville.itinerary'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl: "home.html"
      })
      .when("/itinerary", {
          templateUrl: "components/itinerary/itinerary.html",
          controller: "itineraryCtrl"
      })
      .when("/dangers", {
          templateUrl: "components/dangers/dangers.html",
          controller: "dangersCtrl"
      })
      .when("/non", {
          templateUrl: "components/non/non.html"
      })
      .otherwise({
          redirectTo: '/'
      });
}]);
