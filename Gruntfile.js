module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            'dist/component.css': 'component.css'
        },
        uglify: {
            release:{
                files: {
                    'dist/component.js': 'component.js',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('release', ['uglify', 'cssmin', 'htmlmin']);
};