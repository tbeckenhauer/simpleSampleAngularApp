'use strict';

angular
    .module('tmbTodo', ['ngResource'])
    .factory('tmbTodo', ['$http', '$location',
      function($http, $location){
        return {
          post: function (data) {
            $http.post('http://'+$location.host()+':8080/svc', data);
          },
          get: function () {
            return $http.get('http://'+$location.host()+':8080/svc');
          }
        };
      }]);