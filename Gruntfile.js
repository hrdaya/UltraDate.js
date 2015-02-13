module.exports = function (grunt) {
    'use strict';
    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: grunt.file.read('src/banner.txt'),
            bannerJa: grunt.file.read('src/bannerJa.txt')
        },
        clean: {
            dist: {
                files: [{
                        dot: true,
                        src: ['dist/*.js']
                    }]
            }
        },
        replace: {
            readme: {
                src: 'src/read.txt',
                dest: 'README.md',
                replacements: [{
                        from: /<version>/g,
                        to: '<%= pkg.version %>'
                    }]
            },
            main: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.js',
                replacements: [{
                        from: /^var\sUltraDateBanner;\n/,
                        to: '<%= meta.banner %>'
                    }]
            },
            ja: {
                src: 'src/<%= pkg.name %>.ja.js',
                dest: 'dist/<%= pkg.name %>.ja.js',
                replacements: [{
                        from: /^var\sUltraDateBanner;\n/,
                        to: '<%= meta.bannerJa %>'
                    }]
            }
        },
        uglify: {
            main: {
                options: {
                    preserveComments: 'some'
                },
                src: '<%= replace.main.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            },
            ja: {
                options: {
                    preserveComments: 'some'
                },
                src: '<%= replace.ja.dest %>',
                dest: 'dist/<%= pkg.name %>.ja.min.js'
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'package.json',
                'bower.json',
                'src/*.js',
                'dist/*.js'
            ]
        },
        copy: {
            js: {
                expand: true,
                cwd: 'bower_components/jquery.ex-code-prettify/',
                src: [
                    'jquery.ex-code-prettify.js',
                    'google-code-prettify/*'
                ],
                dest: 'demo/js/'
            },
            css: {
                expand: true,
                cwd: 'bower_components/jquery.ex-code-prettify/',
                src: ['jquery.ex-code-prettify.css'],
                dest: 'demo/css/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['clean', 'replace', 'uglify']);
    grunt.registerTask('build', ['copy', 'replace', 'jshint']);
};