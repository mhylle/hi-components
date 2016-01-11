(function() {
    'use strict';

    angular
        .module('app.security')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'security',
                config: {
                    url: '/security',
                    templateUrl: 'app/security/security.html',
                    controller: 'SecurityController',
                    controllerAs: 'vm',
                    title: 'Security',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Security'
                    }
                }
            }
        ];
    }
})();
