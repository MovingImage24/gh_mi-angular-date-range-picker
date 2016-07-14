'use strict';

module.exports = function (karma) {
  karma.set({

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/index.ts',
      'test/**/*Spec.ts'
    ],

    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },
    preprocessors: {
      'test/**/*Spec.ts': ['webpack'],
      'src/index.ts': ['webpack']
    },

    browsers: ['PhantomJS'],

    logLevel: karma.LOG_INFO,

    singleRun: false,

    webpack: {
      resolve: {
        extensions: ['', '.js', '.ts']
      },
      module: {
        loaders: [
          {
            test: /\.ts$/,
            exclude: 'node_modules',
            loaders: ['awesome-typescript-loader']
          }
        ],
        postLoaders: [{ // << add subject as webpack's postloader
          test: /\.ts$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    }
  });
};
