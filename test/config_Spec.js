'use strict';

describe('\nApp UI Routing', function() {
    var $state;

    // load the controller's module
    beforeEach(module('appmodule'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($injector) {
        $state = $injector.get('$state');
    }));


    // checking Routing States
    describe('\nChecking Routing states', function() {

        var state;

        //checking the firstPage state of config.js
        describe('\nchecking the firstPage state', function() {
            it('should have the correct firstPage route URL', function() {
                state = $state.get('firstPage');
                expect(state.url).toEqual('/firstPage');
            });

            it('should have the correct firstPage route template', function() {
                expect(state.templateUrl).toEqual('modules/first/views/firstPage.html');
            });

            it('should have the correct firstPage routing controller', function() {
                expect(state.controller).toEqual('firstPageCtrl');
            });
        });
        //end of testing the firstPage route


        //checking the secondPage state of config.js
        describe('\nchecking the secondPage state', function() {
            it('should have the correct secondPage route URL', function() {
                state = $state.get('secondPage');
                expect(state.url).toEqual('/secondPage/:loginId');
            });

            it('should have the correct secondPage route template', function() {
                expect(state.templateUrl).toEqual('modules/second/views/secondPage.html');
            });

            it('should have the correct secondPage routing controller', function() {
                expect(state.controller).toEqual('secondPageCtrl');
            });
        });
        //end of testing the secondPage route


    });
    // end of checking Routing States
});
