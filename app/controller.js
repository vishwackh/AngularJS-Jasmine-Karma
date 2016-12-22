(function() {
    'use strict';

    angular
        .module('appmodule')
        .controller('Controller', Controller);

    Controller.$inject = ['dependencies'];

    /* @ngInject */
    function Controller(dependencies) {
        var vm = this;
    }
})();
