'use strict';

angular.module('admin').controller('AdminController', ['$scope', 'Authentication', '$location',
    function($scope, Authentication, $location) {
        $scope.user = Authentication.user;

        // If user is not signed in then redirect back home
        if (!$scope.user) {
            $location.path('admin/login');
        }
    }
]);