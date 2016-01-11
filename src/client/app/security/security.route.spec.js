/* jshint -W117, -W030 */
describe('security routes', function () {
    describe('state', function () {
        var view = 'app/security/security.html';

        beforeEach(function() {
            module('app.security', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state security to url /security', function() {
            expect($state.href('security', {})).to.equal('/security');
        });

        it('should map /security route to security View template', function () {
            expect($state.get('security').templateUrl).to.equal(view);
        });

        it('of security should work with $state.go', function () {
            $state.go('security');
            $rootScope.$apply();
            expect($state.is('security'));
        });
    });
});
