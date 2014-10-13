angular
    .module('tmbTodo', ['ngResource'])
    .factory('tmbTodo', ['$http',
      function($http){
        return {
          post: function (data) {
            $http.post("http://localhost:8080/svc", data)
          },
          get: function () {
            return $http.get("http://localhost:8080/svc")
          }
        }
      }]);