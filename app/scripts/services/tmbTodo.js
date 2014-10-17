angular
    .module('tmbTodo', ['ngResource'])
    .factory('tmbTodo', ['$http',
      function($http){
        return {
          post: function (data) {
            $http.post("http://todo.thomas.beckenhauer.info:8080/svc", data)
          },
          get: function () {
            return $http.get("http://todo.thomas.beckenhauer.info:8080/svc")
          }
        }
      }]);