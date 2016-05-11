'use strict';

angular.module('tmbDraggable', [])
  .directive('tmbDraggable', function() {
    return {
      require: '^tmbDraggableContainer',
      replace: false,
      link: function ($scope, element, attrs, draggableContainer) {
        element
            .attr({ draggable: true })
						.on('dragstart', function (event) {
							event.originalEvent.dataTransfer.setData('firefox', 'fix');
              draggableContainer.dragItem($scope.$index);
            })
            .on('dragover', function () {
              draggableContainer.hoverItem($scope.$index);
            })
            .on('dragleave', function () {
            })
            .on('drop', function (e) {
              e.stopPropagation && e.stopPropagation();
            })
            .on('dragend', function () {
              draggableContainer.dropItem();
            });
      }
    };
  });
