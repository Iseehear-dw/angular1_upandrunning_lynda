(function () {

    "use strict";

    var myApp = angular.module('myApp', []);

    // add [] to prevent js minify
    myApp.controller('MyController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
        var myController = this;
        $scope.artists = myController.artists = [];

        $http.get('js/data.json').success(function (data) {
            $scope.artists = myController.artists = data;
            $log.info("load json data successful");
        });
    }]);

})();