module.exports = function (grunt) {
    'use strict';
    grunt.util.linefeed = '\n';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            src: "src",
            dist: "dist",
            txt: "txt",
            demo: "demo",
            test: "test",
            banner: grunt.file.read('txt/banner.txt'),
            bannerJa: grunt.file.read('txt/bannerJa.txt')
        },
        clean: {
            dist: {
                files: [{
                        dot: true,
                        src: ['<%= meta.dist %>/*.js']
                    }]
            },
            coverage: {
                files: [{
                        dot: true,
                        src: ['coverage']
                    }]
            }
        },
        replace: {
            readme: {
                src: '<%= meta.txt %>/read.txt',
                dest: 'README.md',
                replacements: [{
                        from: /<version>/g,
                        to: '<%= pkg.version %>'
                    }]
            },
            main: {
                src: '<%= meta.src %>/<%= pkg.name %>.js',
                dest: '<%= meta.dist %>/<%= pkg.name %>.js',
                replacements: [{
                        from: /^var\sUltraDateBanner;\n/,
                        to: '<%= meta.banner %>'
                    }]
            },
            ja: {
                src: '<%= meta.src %>/<%= pkg.name %>.ja.js',
                dest: '<%= meta.dist %>/<%= pkg.name %>.ja.js',
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
                dest: '<%= meta.dist %>/<%= pkg.name %>.min.js'
            },
            ja: {
                options: {
                    preserveComments: 'some'
                },
                src: '<%= replace.ja.dest %>',
                dest: '<%= meta.dist %>/<%= pkg.name %>.ja.min.js'
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'package.json',
                'bower.json',
                '.jshint*',
                '<%= meta.src %>/*.js',
                '<%= meta.dist %>/<%= pkg.name %>.js',
                '<%= meta.dist %>/<%= pkg.name %>.ja.js'
            ],
            options: {
                loopfunc: true
            }
        },
        copy: {
            js: {
                expand: true,
                cwd: 'bower_components/jquery.ex-code-prettify/',
                src: [
                    'jquery.ex-code-prettify.js',
                    'google-code-prettify/*'
                ],
                dest: '<%= meta.demo %>/js/'
            },
            css: {
                expand: true,
                cwd: 'bower_components/jquery.ex-code-prettify/',
                src: ['jquery.ex-code-prettify.css'],
                dest: '<%= meta.demo %>/css/'
            }
        },
        karma: {
            unit: {
                configFile: 'karma_src.conf.js'
            }
        },
        watch: {
            js: {
                spawn: false,
                files: [
                    'Gruntfile.js',
                    'package.json',
                    'bower.json',
                    '<%= meta.src %>/*.js',
                    '<%= meta.test %>/*.js',
                    '<%= meta.txt %>/*'
                ],
                tasks: [
                    'clean',
                    'replace',
                    'uglify',
                    'jshint'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('build', ['clean', 'copy', 'replace', 'uglify']);
};