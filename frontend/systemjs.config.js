(function (global) {
    System.config({
        map: {
            app: 'app',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            'angular2-datatable': 'npm:angular2-datatable',
            'angular2-modal': 'npm:angular2-modal',
            'angular2-modal/plugins/bootstrap': 'npm:angular2-modal/bundles/angular2-modal.bootstrap.umd.js',
            'angular2-modal/plugins/js-native': 'npm:angular2-modal/bundles/angular2-modal.js-native.umd.js',
            'angular2-modal/plugins/vex': 'npm:angular2-modal/bundles/angular2-modal.vex.umd.js',
            'lodash': 'npm:lodash/lodash.js',
            'rxjs': 'npm:rxjs'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            'angular2-datatable': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'angular2-modal': {
                defaultExtension: 'js',
                main: 'bundles/angular2-modal.umd.js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        },
        paths: {
            'npm:': 'node_modules/'
        }
    });
})(this);
