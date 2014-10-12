'use strict';

/**
 * @ngdoc function
 * @name simpleSampleAngularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleSampleAngularAppApp
 */
angular.module('simpleSampleAngularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
