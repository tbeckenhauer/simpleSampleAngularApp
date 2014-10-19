'use strict';

angular.module('tmbDraggableIcon', [])
    .directive('tmbDraggableIcon', function() {
      return {
        replace: false,
        link: function ($scope, element) {
          element
              .css({
                cursor: 'ns-resize'
              });
        }
      };
    });
