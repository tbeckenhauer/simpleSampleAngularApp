'use strict';

angular.module('tmbDraggable', [])
  .directive('tmbDraggable', function() {
    return {
      require: '^tmbDraggableContainer',
      replace: false,
      link: function ($scope, element, attrs, draggableContainer) {
        element
            .attr({ draggable: true })
            .on('dragstart', function () {
              console.log('dragstart', $scope.$index);
              draggableContainer.dragItem($scope.$index);
            })
            .on('dragover', function () {
              console.log('dragover', $scope.$index);
              console.log(element);
              debugger;
              draggableContainer.hoverItem($scope.$index);
            })
            .on('dragleave', function () {
              console.log('dragleave', $scope.$index);
            })
            .on('drop', function (e) {
              console.log('drop');
              e.stopPropagation && e.stopPropagation();
            })
            .on('dragend', function () {
              console.log('dragend');
              draggableContainer.dropItem();
            });
      }
    };
  });
