module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
                    'bower_components/typeahead.js/dist/typeahead.bundle.js',
                    'bower_components/handlebars/handlebars.js',
                    'bower_components/list.js/dist/list.js',
                    'bower_components/leaflet/dist/leaflet.js',
                    'bower_components/leaflet.markercluster/dist/leaflet.markercluster-src.js',
                    'bower_components/leaflet.locatecontrol/src/L.Control.Locate.js',
                    'bower_components/leaflet-groupedlayercontrol/src/leaflet.groupedlayercontrol.js',
                    'src/js/bootleaf.js'
                ],
                dest: 'assets/js/bootleaf.js'
            }
        },
        jshint: {
            beforeconcat: ['src/js/bootleaf.js']
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: [
                    {
                        'assets/css/bootleaf.css' : 'src/sass/bootleaf.scss'
                    }
                ]
            }
        },
        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/fontawesome/fonts',
                        src: ['**/*'],
                        dest: 'assets/fonts',
                        filter: 'isFile'
                    }
                ]
            },
            edit: {
                options: {
                    process: function(content, srcpath) {
                        // Fixup Leaflet image paths to use /assets/img and not /images
                        return content.replace(/images\//g, '../../assets/img/');
                    }
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'bower_components',
                        src: [
                            'leaflet/dist/*.css',
                            '!**/*.min.css'
                        ],
                        dest: 'src/sass',
                        filter: 'isFile',
                        ext: '.scss',
                        extDot: 'last'
                    }
                ]
            },
            csstoscss: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'bower_components',
                        src: [
                            'leaflet.locatecontrol/dist/*.css',
                            'leaflet.markercluster/dist/*.css',
                            'leaflet-groupedlayercontrol/src/*.css',
                            '!**/*.min.css'
                        ],
                        dest: 'src/sass',
                        filter: 'isFile',
                        ext: '.scss',
                        extDot: 'last'
                    }
                ]
            },
            img: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'src/img/**/*.ico',
                            'src/img/**/*.png',
                            'bower_components/leaflet/dist/images/**/*.png',
                            'bower_components/Leaflet.awesome-markers/dist/images/**/*.png'
                        ],
                        dest: 'assets/img',
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['build']
            },
            sass: {
                files: ['src/sass/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['jshint', 'concat']
            }
        }
    });

    grunt.registerTask('default', 'watch');
    grunt.registerTask('nodsstore', function() {
        grunt.file.expand({
            filter: 'isFile',
            cwd: '.'
        }, ['**/.DS_Store']).forEach(function(file) {
            grunt.file.delete(file);
        });
    });
    grunt.registerTask('warn-fail', 'Fail on warning log', function() {
        var log = grunt.log;
        var _warn = log.warn;
        log.warn = function() {
            _warn.apply(log, arguments);
            grunt.fail.warn('Warning triggered; failing horribly');
        }
    });
    grunt.registerTask('build', ['nodsstore', 'warn-fail', 'copy', 'sass', 'jshint', 'concat']);
}
