'use strict';

/**
 * @ngdoc function
 * @name simpleSampleAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleSampleAngularAppApp
 */
angular.module('simpleSampleAngularAppApp')
  .controller('MainCtrl', ['$scope', '$routeParams', 'tmbTodo',
      function ($scope, $routeParams, tmbTodo) {

        $scope.todo = {
          item: '',
          list: []
        };

        tmbTodo.get().then(function(response) {
          $scope.todo.list = JSON.parse(response.data.list)
        });

        $scope.$watchCollection('todo.list', function() {
          tmbTodo.post($scope.todo.list)
        });

        $scope.submit = function () {
          $scope.todo.list.push($scope.form.item);
          $scope.form.item = "";
        };

        $scope.remove = function (index) {
          $scope.todo.list.splice(index, 1);
        };

  }]);