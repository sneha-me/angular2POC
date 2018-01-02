﻿(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        //map tells system loader what files exactly  to look for 
        map: {
            app: 'dist',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',

            'mydaterangepicker': 'npm:mydaterangepicker/bundles/mydaterangepicker.umd.js',
            'ng2-translate':'npm:ng2-translate/bundles/ng2-translate.umd.js'

        },

        //packages tells system loader what to load when no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-translate': {
                defaultExtension:'js'
            }
        }
    });
})(this);
