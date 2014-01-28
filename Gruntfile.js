module.exports = function(grunt) {

    var cli = grunt.cli;

    cli.optlist.beautify = {
        "short": "B",
        info: "Set beautify on",
        type: String
    };

    grunt.initConfig({
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint']
            },
            'js': {
                files: [ 'grunt/js/**/*.js' ],
                tasks: ['jshint','requirejs','jekyll:build']
            },
            'scss': {
                files: [ 'grunt/sass/**/*.scss'],
                tasks: ['compass', 'jekyll:build']
            },
            'jekyll': {
                files: [ '_includes/**/*', '_layouts/**/*', '*.html', '_config.yml' ],
                tasks: ['jekyll:build']
            },
            'specs': {
                files: ['test/specs/*.js','test/config.js'],
                tasks: ['jshint','jekyll:build']
            }
        },
        clean: {
            toolkit: ['dist/images','dist/scripts','dist/stylesheets'],
            js: ['dist/scripts'],
            css: ['dist/images','dist/stylesheets'],
            fonts: ['grunt/fonts/min','dist/fonts'],
            coverage: ['test/coverage']
        },
        jshint: {
            toolkit: ['Gruntfile.js',
                      'grunt/js/components/*.js',
                      'grunt/js/utils/*.js',
                      'grunt/js/demo/*.js',
                      'test/specs/**/*.js'],
            others: ['Gruntfile.js'],
            options: {
                "globals": {
                    document: false,
                    window: false,
                    console: false,
                    setTimeout: false,
                    clearTimeout: false,
                    setInterval: false,
                    clearInterval: false
                }
            }
        },
        compass: {
            toolkit: {
                options: {
                    config: 'grunt/sass/config.rb',
                    sassDir: 'grunt/sass/',
                    cssDir: 'dist/stylesheets/',
                    outputStyle: grunt.option('beautify') ? "expanded" : "compressed" ,
                    noLineComments: true,
                    trace: true
                }
            }
        },
        requirejs:{
            toolkit: {
                options: {
                    optimize: grunt.option('beautify') ? "none" : "uglify2",
                    preserveLicenseComments: false,
                    baseUrl: "grunt/js",
                    dir: "dist/scripts",
                    removeCombined: true,
                    generateSourceMaps: false,
                    paths: {
                        mocha: '../../test/libraries/mocha',
                        chai: '../../test/libraries/chai',
                        runner: '../../test/runner',
                        specs: '../../test/specs/'
                    },
                    modules:[{
                        name: 'toolkit'
                    },{
                        name: 'demo'
                    },{
                        name: 'changes'
                    }]
                }
            }
        },
        webfont: {
            icons: {
                src: 'grunt/fonts/min/*.svg',
                dest: 'dist/fonts',
                destCss: 'dist/fonts',
                options: {
                    font : 'skycons',
                    template : 'grunt/fonts/template/skycon-template.css',
                    htmlDemoTemplate : 'grunt/fonts/template/skycon-template.html',
                    htmlDemo : true,
//                    engine : 'node',
                    destHtml : '_includes/baseStyles/icons',
                    hashes : false,
                    embed : true
                }
            }
        },
        svgmin: {                       // Task
            options: {                  // Configuration that will be passed directly to SVGO
                plugins: [{
                    removeViewBox: false,
                    removeUselessStrokeAndFill: true,
                    removeEmptyAttrs: true
                }]
            },
            fonts: {                         // Target
                files: [{                   // Dictionary of files
                    expand: true,           // Enable dynamic expansion.
                    cwd: 'static/font-svgs/',    // Src matches are relative to this path.
                    src: ['*.svg'],      // Actual pattern(s) to match.
                    dest: 'grunt/fonts/min/', // Destination path prefix.
                    ext: '.svg'         // Dest filepaths will have this extension.
                }]
            },
            icons: {                         // Target
                files: [{                   // Dictionary of files
                    expand: true,           // Enable dynamic expansion.
                    cwd: 'grunt/svgs/orig/',    // Src matches are relative to this path.
                    src: ['*.svg'],      // Actual pattern(s) to match.
                    dest: 'grunt/svgs/min/', // Destination path prefix.
                    ext: '.svg'         // Dest filepaths will have this extension.
                }]
            }
        },

        grunticon: {
            colourSVG: {
                options: {
                    src: "grunt/svgs/min",
                    dest: "dist/svgs/"
                }
            }
        },

        jekyll: {                            // Task
            options: {                          // Universal options
                bundleExec: true,
                config: '_config.yml'
            },
            build:{
                options: {
                    watch: false,
                    serve: false
                }
            },
            run:{
                options: {
                    watch: true,
                    serve: true
                }
            }
        },

        mocha: {
            all: {
                src: (function() {
                    return ['_site/test.html'];
                }()),
                options: {
                    run: false,
                    log: true // Set to true to see console.log() output on the terminal
                }
            }
        },

        karma: {
            local: {
                configFile: 'test/karma.conf.js'
            },
            crossBrowser: {
                configFile: 'test/karma.crossbrowser.conf.js'
            }
        },
        coverage: {
            options: {
                thresholds: {
                    'statements': 90,
                        'branches': 90,
                        'lines': 90,
                        'functions': 90
                },
                dir: 'coverage',
                root: 'test'
            }
        },

        exec: {
            manual_bs_test: {
                cmd: 'java -jar test/libraries/BrowserStackTunnel.jar $BROWSERSTACK_API localhost,4000,0'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-webfont'); //https://github.com/sapegin/grunt-webfont
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-istanbul-coverage');

    grunt.registerTask('default', ['clean:toolkit', 'compass:toolkit', 'jshint', 'requirejs']);
    grunt.registerTask('spy', ['clean:toolkit', 'compass:toolkit', 'jshint', 'requirejs', 'jekyll:build', 'watch']);
    grunt.registerTask('sloppy', ['clean:toolkit', 'compass:toolkit', 'requirejs', 'watch']);
    grunt.registerTask('fonts', ['clean:css', 'clean:fonts', 'svgmin:fonts', 'webfont', 'compass:toolkit']);
    grunt.registerTask('svgs', ['svgmin:icons', 'grunticon']);
    grunt.registerTask('test', ['clean:coverage','karma:local', 'coverage']);
    grunt.registerTask('test_mocha', ['mocha']);
    grunt.registerTask('manual_bs_test', ['exec:manual_bs_test']);
};