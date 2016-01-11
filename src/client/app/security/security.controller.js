(function () {
    'use strict';

    angular
        .module('app.security')
        .controller('SecurityController', SecurityController);

    SecurityController.$inject = ['logger'];
    /* @ngInject */
    function SecurityController(logger) {
        var vm = this;
        vm.title = 'Security';

        activate();

        function activate() {
            logger.info('Activated Security View');
        }
    }
})();
