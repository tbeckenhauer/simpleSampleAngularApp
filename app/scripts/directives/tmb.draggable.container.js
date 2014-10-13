angular.module('tmbDraggableContainer', [])
  .directive('tmbDraggableContainer', function() {
    return {
      replace: false,
      controller: function($scope) {
        var drag = {
              list: []
            };

        this.dragItem = function (index) {
          drag.source = index;
        };
        this.hoverItem = function (index) {
          drag.target = index;
        };
        this.dropItem = function () {
          drag.list = [];
          $scope.todo.list.forEach(function (item, i) {
            if (i === drag.source) {
              //we don't want to put the source element back
              if (i === drag.target) {
                //unless it is also the target
                drag.list.push(item);
              }
            } else if (i === drag.target) {
              //flip these lines around to insert after the target
              drag.list.push($scope.todo.list[drag.source]);
              drag.list.push($scope.todo.list[drag.target]);
            } else {
              drag.list.push(item);
            }
          });
          $scope.todo.list = drag.list;
          $scope.$apply();
        };
      }
    };
  });