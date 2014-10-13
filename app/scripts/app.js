'use strict';

/**
 * @ngdoc overview
 * @name simpleSampleAngularAppApp
 * @description
 * # simpleSampleAngularAppApp
 *
 * Main module of the application.
 */
angular
  .module('simpleSampleAngularAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'tmbDraggable',
    'tmbDraggableIcon',
    'tmbDraggableContainer',
    'tmbTodo'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
