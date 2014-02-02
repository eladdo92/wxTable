/**
 * Created by Elad on 2/2/14.
 */

angular.module('myApp', ['wxTable'])
    .controller('testController', ['$scope', function($scope) {
        $scope.headers = [
            {
                field: 'field1',
                displayValue: 'Title1',
                filter: 'date'
            },
            {
                field: 'field2',
                displayValue: 'Title2',
                template: '<i>{{ data | number: 3 }}</i>'
            },
            {
                field: 'field3',
                displayValue: 'Title3'
            }
        ];

        $scope.dataRows = [
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            },
            {
                field1: new Date(),
                field2: Math.random(),
                field3: Math.random()
            }
        ];
    }])