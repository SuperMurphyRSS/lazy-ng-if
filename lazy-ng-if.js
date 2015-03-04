angular.module('lazy-ng-if', []);
angular.module('lazy-ng-if').directive('lazyNgIf', function($compile) {
    return {
        terminal: true,
        priority: 1000,
        link: function($scope, $element, $attrs) {
            var placeholder = null;
            var watchHandler = $scope.$watch($attrs.lazyNgIf, function(value) {
                if (value) {
                    $element.removeAttr('lazy-ng-if');
                    $element.attr('ng-if', $attrs.lazyNgIf);
                    if (placeholder) {
                        placeholder.after($element);
                        placeholder.remove();
                    }

                    $compile($element)($scope);
                    watchHandler();
                } else if (!placeholder) {
                    placeholder = angular.element(document.createComment('lazyNgIf placeholder'));
                    $element.after(placeholder);
                    $element.remove();
                }
            });
        }
    };
});
