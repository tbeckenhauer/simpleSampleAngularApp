angular.module('tmbDraggableIcon', [])
    .directive('tmbDraggableIcon', function() {
      return {
        replace: false,
        link: function ($scope, element, attrs) {
          element
              .css({
                cursor: 'ns-resize'
              })
        }
      };
    });
