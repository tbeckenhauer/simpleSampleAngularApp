angular.module('tmbDraggable', [])
  .directive('tmbDraggable', function() {
    return {
      require: '^tmbDraggableContainer',
      replace: false,
      link: function ($scope, element, attrs, draggableContainer) {
        element
            .attr({ draggable: true })
            .on('dragstart', function () {
              element.css({
                'user-select': 'none',
                '-moz-user-select': 'none',
                '-khtml-user-select': 'none',
                '-webkit-user-select': 'none'
            });
              draggableContainer.dragItem($scope.$index);
            })
            .on('dragover', function () {
              element.css({
                'border-top': 'solid gray 1px'
              });
              draggableContainer.hoverItem($scope.$index);
            })
            .on('dragleave', function () {
              element.css({
                'border-top': 'none'
              })
            })
            .on('drop', function (e) {
              e.stopPropagation && e.stopPropagation();
            })
            .on('dragend', function () {
                draggableContainer.dropItem()
            });
      }
    };
  });
