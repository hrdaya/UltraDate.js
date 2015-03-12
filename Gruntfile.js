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
            test: "test"
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
            bower: {
                src: '<%= meta.txt %>/bower.txt',
                dest: 'bower.json',
                replacements: [{
                        from: /<version>/g,
                        to: '<%= pkg.version %>'
                    }]
            },
            main: {
                src: '<%= meta.src %>/<%= pkg.name %>.js',
                dest: '<%= meta.dist %>/<%= pkg.name %>.js',
                replacements: [
                    {
                        from: /<pkg\.version>/g,
                        to: '<%= pkg.version %>'
                    },
                    {
                        from: /<pkg\.name>/g,
                        to: '<%= pkg.name %>'
                    },
                    {
                        from: /<pkg\.homepage>/g,
                        to: '<%= pkg.homepage %>'
                    },
                    {
                        from: /<pkg\.author\.name>/g,
                        to: '<%= pkg.author.name %>'
                    },
                    {
                        from: /<pkg\.author\.url>/g,
                        to: '<%= pkg.author.url %>'
                    },
                    {
                        from: /<pkg\.license\.type>/g,
                        to: '<%= pkg.license.type %>'
                    },
                    {
                        from: /<pkg\.license\.url>/g,
                        to: '<%= pkg.license.url %>'
                    }
                ]
            },
            ja: {
                src: '<%= meta.src %>/<%= pkg.name %>.ja.js',
                dest: '<%= meta.dist %>/<%= pkg.name %>.ja.js',
                replacements: [
                    {
                        from: /<pkg\.name>/g,
                        to: '<%= pkg.name %>'
                    },
                    {
                        from: /<pkg\.homepage>/g,
                        to: '<%= pkg.homepage %>'
                    },
                    {
                        from: /<pkg\.author\.name>/g,
                        to: '<%= pkg.author.name %>'
                    },
                    {
                        from: /<pkg\.author\.url>/g,
                        to: '<%= pkg.author.url %>'
                    },
                    {
                        from: /<pkg\.license\.type>/g,
                        to: '<%= pkg.license.type %>'
                    },
                    {
                        from: /<pkg\.license\.url>/g,
                        to: '<%= pkg.license.url %>'
                    }
                ]
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
                'karma/*.js',
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
                configFile: 'karma/dist_min.conf.js'
            },
            dist: {
                configFile: 'karma/dist.conf.js'
            },
            src: {
                configFile: 'karma/src.conf.js'
            }
        },
        coveralls: {
            options: {
                debug: true,
                coverage_dir: 'coverage',
                force: true,
                recursive: true
            }
        },
        watch: {
            js: {
                spawn: false,
                files: [
                    'Gruntfile.js',
                    'package.json',
                    'bower.json',
                    'karma/*.js',
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
    grunt.loadNpmTasks('grunt-karma-coveralls');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['karma', 'coveralls']);
    grunt.registerTask('build', ['clean', 'copy', 'replace', 'uglify']);
};
