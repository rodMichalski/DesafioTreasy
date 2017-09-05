angular.module('warriors').directive('lineTree', function (RecursionHelper) {

    return {
        restrict: "AE",
        scope: {
            lineNo: '=',
            lineNoPai: '=',
            setSelected: '=',
            selectedLine: '=',
            filterInput: '='
        },
        compile: function(element) {
            return RecursionHelper.compile(element)
        },
        templateUrl: 'js/directives/line-tree-template.html',
        controller: "TreeController"
    };
});