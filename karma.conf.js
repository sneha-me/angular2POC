    module.exports = function(config) {
      config.set({
        basePath: '',
        frameworks: ['jasmine'],

        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter')
        ],

        /**** Remember we said that included means that the file should added as a <script>. Well this is what’s causing the error. For tests, we don’t want our application files added as a <script>. We want SystemJS to load them, just like in the application. solets update files arrayas below  ****/
          
        files: [
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',
            
            // Polyfills
            'node_modules/core-js/client/shim.js',
            'node_modules/reflect-metadata/Reflect.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            
            // Paths loaded via module imports:
              // Angular itself
              {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
              {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            { pattern: 'systemjs.config.js', included: false, watched: false },
            'karma-test-shim.js',
            
           /**** replace these with following common pattern
                { pattern: 'dist/tests/1st.spec.js', included: false, watched: true },
                { pattern: 'dist/tests/1st.spec.js.map', included: false, watched:true}
          ********************************************************************************/
            
            { pattern: 'dist/**/*.js', included: false, watched: true },
            { pattern: 'app/**/*.ts', included: false, watched: true },  // source file path for debuugiing
            { pattern: 'dist/**/*.js.map', included: false, watched: true }      
            
        ],
/************************************************************************************************
At this point, if we tried to run the test, nothing would happen, i.e. no tests would be run. This is because 1) The spec file is not added as a <script> and 2) we haven’t told SystemJS to load them yet.

This is where we want to make use of a karma-test-shim.js file, that we can use just for tests. In this file, we will have SystemJS load all of our modules. ******************************************************************************************************************/
        reporters: ['progress', 'kjhtml'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
      });
    };
