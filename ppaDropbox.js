angular.module('ppaComponents')
  .directive('ppaDropbox', function() {
    return {
      restrict: 'E',
      template:
        '<app-dropbox>' +
          '<ng-transclude></ng-transclude>' +
        '</app-dropbox>',
      transclude: true,
      scope: {
        types: '@',
        onDataDrop: '&'
      },
      link: function(scope, iElement, iAttrs) {
        var types = angular.fromJson(scope.types) || [];
        // it assumes jqLite instead of jQuery
        var appDropbox = angular.element(iElement.children()[0]);
        appDropbox.attr('types', scope.types);
        appDropbox.on('data-drop', function(event) {
          scope.$apply(function() {
            scope.onDataDrop({event: event});
          });
        });
      }
    };
  });