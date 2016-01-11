(function () {
    'use strict';

    angular
        .module('hi-components')
        .directive('login', logindialog);

    logindialog.$inject = [];

    /* @ngInject */
    function logindialog() {
        var directive = {

            replace: true,
            restrict: 'AE',
            template: '<p style="background-color:{{color}}">Hello World',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            elem.bind('click', function () {
                elem.css('background-color', 'white');
                scope.$apply(function () {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function () {
                elem.css('cursor', 'pointer');
            });
        }
    }

    LoginController.$inject = [];

    /* @ngInject */
    function LoginController() {

    }
})();


