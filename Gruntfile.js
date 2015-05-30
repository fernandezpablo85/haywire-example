module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['src/haywire.ts', 'src/haywire_tests.ts'],
        dest: 'build',
        options: {
          module: 'amd',
          target: 'es5',
          basePath: 'src'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['typescript']);

};
