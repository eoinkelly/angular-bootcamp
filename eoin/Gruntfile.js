/* global module */
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: true,
        ignores: ['js/libs/**/*.js']
      },
      all: ['Gruntfile.js', 'js/**/*.js']
    },

    protractor: {
      // Docs: https://npmjs.org/package/grunt-protractor-runner
      all: {
        configFile: 'test/protractor.conf.js', // Target-specific config file
      }
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  // alias task names for less typing
  grunt.registerTask('unit', ['karma:unit']);
  grunt.registerTask('e2e', ['protractor:all']);
  grunt.registerTask('test', ['unit', 'e2e']);

  // grunt will run 'default' task if you run it without any args
  grunt.registerTask('default', ['test']);

  // load task definitions
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');
};
