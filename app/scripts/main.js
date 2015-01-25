require.config({
    paths: {
        ng: '../bower_components/angular/angular',
        nganimate: '../bower_components/angular-animate/angular-animate',
        ngaria: '../bower_components/angular-aria/angular-aria',
        ngmaterial: '../bower_components/angular-material/angular-material',
        hammer: '../bower_components/hammerjs/hammer',
        hammerProxy: 'modules/hammerProxy',
        jquery: '../bower_components/jquery/dist/jquery',
        controllersModule: 'modules/controllers',
        servicesModule: 'modules/services'
    },
    shim: {
        ng: {
            deps: ['jquery'],
            exports: 'angular'
        },

        ngmaterial: {
            deps: ['ng', 'nganimate', 'ngaria', 'hammerProxy']
        },

        nganimate: {
            deps: ['ng']
        },

        ngaria: {
            deps: ['ng']
        },

        hammer: {
            exports: 'Hammer'
        }
    }
});

require([
    'app',
    'bootstrap'
], function (app) {
    app.config(['$routeProvider', function ($routeProvider) {
        console.log('In routeProvider');
    }]);
});