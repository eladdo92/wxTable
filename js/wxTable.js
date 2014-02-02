/**
 * Created by Elad on 2/2/14.
 */

angular.module('wxTable', [])
    .directive('wxTable', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                headers: '=',
                rows: '=',
                rowsInPage: '='
            },
            templateUrl: 'templates/tableTemplate.html',
            controller: 'wxTableController'
        };
    })
    .controller('wxTableController', ['$scope', '$filter', function($scope, $filter) {
        // ~~~~~~~~~~~~~~~~~~~ config ~~~~~~~~~~~~~~~~~~~
        var defaultRowsInPage = 5;

        // ~~~~~~~~~~~~~~~~~~~ init ~~~~~~~~~~~~~~~~~~~
        $scope.rowsInPage = $scope.rowsInPage || defaultRowsInPage;
        $scope.rowsToShow = $scope.rows.slice(0, $scope.rowsInPage);

        // ~~~~~~~~~~~~~~~~~~~ order by ~~~~~~~~~~~~~~~~~~~
        var reverseOrder = false,
            orderByField;
        $scope.clickHeader = function(field) {
            if(field == orderByField) {
                reverseOrder = !reverseOrder;
            }
            else {
                reverseOrder = false;
            }
            orderByField = field;
            var orderByFunction = $filter('orderBy');
            $scope.rowsToShow = orderByFunction($scope.rowsToShow, orderByField, reverseOrder);
        };

        // ~~~~~~~~~~~~~~~~~~~ paging ~~~~~~~~~~~~~~~~~~~
        $scope.currentPage = 0;
        $scope.numberOfPages = Math.ceil($scope.rows.length / $scope.rowsInPage);
        function getPage(pageNumber) {
            return $scope.rows.slice(
                pageNumber * $scope.rowsInPage,
                pageNumber * $scope.rowsInPage + $scope.rowsInPage
            );
        }
        $scope.nextPage = function() {
            if(($scope.currentPage + 1) * $scope.rowsInPage >= $scope.rows.length) return;
            $scope.rowsToShow = getPage(++$scope.currentPage);
        };
        $scope.PreviousPage = function() {
            if($scope.currentPage == 0) return;
            $scope.rowsToShow = getPage(--$scope.currentPage);
        };
    }])
    .directive('wxCompileTemplate', ['$compile', function($compile) {
        return function (scope, element, attrs) {
            scope.data = scope.$parent.row[scope.$parent.header.field];
            scope.$watch(
                function(scope) {
                    return scope.$eval(attrs.wxCompileTemplate);
                },
                function(value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        }
    }])
    .filter('wxTableFilterCaller', ['$filter', function($filter) {
        return function(value, filterName) {
            if(!filterName) return value;

            var filterFunction = $filter(filterName);
            return filterFunction(value);
        };
    }]);