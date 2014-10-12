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
      $scope.todo = {
        item: '',
        list: []
      };

      $scope.submit = function () {
        $scope.todo.list.push($scope.form.item);
        $scope.form.item = "";
      };

      $scope.remove = function (index) {
        $scope.todo.list.splice(index, 1);
      };

  });