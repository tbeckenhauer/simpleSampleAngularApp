'use strict';

/**
 * @ngdoc function
 * @name simpleSampleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleSampleAngularAppApp
 */
angular.module('simpleSampleAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
