/**
 * Created by Jeffrey on 8/24/16.
 */

'use strict';

eventsApp.controller('EventController',
    function  ($scope) {
        $scope.primitive = 4;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am'
        };

    }
);