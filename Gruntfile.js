/**
 * Created by quuyely on 26/12/19.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["snomed-interaction-components/dist", "snomed-interaction-components/views/compiled"],
        concat: {
            options: {
              separator: ';'
            },
            js: {
                src: [
                    'snomed-interaction-components/views/compiled/templates.js',
                    'snomed-interaction-components/js/conceptExpressions.js',
                    'snomed-interaction-components/js/conceptDetailsPlugin.js',
                    'snomed-interaction-components/js/countryIcons.js',
                    'snomed-interaction-components/js/drawConceptDiagram.js',
                    'snomed-interaction-components/js/popover.js',
                    'snomed-interaction-components/js/searchPlugin.js',
                    'snomed-interaction-components/js/svgdiagrammingv2.js',
                    'snomed-interaction-components/js/taxonomyPlugin.js',
                    'snomed-interaction-components/js/refsetPlugin.js',
                    'snomed-interaction-components/js/favoritesPlugin.js',
                    'snomed-interaction-components/js/queryPlugin.js',
                    'snomed-interaction-components/js/util.js',
                    'snomed-interaction-components/js/dailyBuildPlugin.js',
                    'snomed-interaction-components/js/communityContentPlugin.js'
                ],
                dest: 'snomed-interaction-components/dist/js/internal.js'
            },
            externalJs:{
                src:[
                    'external-libs/jquery-3.3.1.min.js',
                    'external-libs/jquery-ui-1.10.4.custom.min.js',
                    'external-libs/base64.js',
                    'external-libs/jquery.svg.js',
                    'external-libs/jquery.splitter-0.14.0.js',
                    'external-libs/conduit.min.js',
                    'external-libs/lodash.js',
                    'external-libs/postal.min.js',
                    'external-libs/bootstrap-tour.min.js',
                    'external-libs/jquery.i18n.properties-min-1.0.9.js',
                    'external-libs/handlebars-v1.3.0.min.js',
                    'external-libs/bootstrap.min.js',
                    'external-libs/jquery.ui.touch-punch.min.js',
                    'external-libs/excellentexport.min.js',
                    'external-libs/notify.js',
                    'external-libs/clipboard.min.js',
                    'external-libs/popover-extra-placements.js',
                    'external-libs/canvas2image.js',
                    'external-libs/canvg.min.js',
                    'external-libs/bootstrap-multiselect.js',
                    'external-libs/jquery.history.js',
                    'external-libs/ZeroClipboard.js',
                    'external-libs/datatables.min.js'
                ],
                dest: 'snomed-interaction-components/dist/js/external.js'
            },
            combinedJs:{
                src:[
                    'snomed-interaction-components/dist/js/external.js',
                    'snomed-interaction-components/dist/js/internal.js'
                ],
                dest: 'snomed-interaction-components/dist/js/<%= pkg.name %>.js'
            },
            css: {
                src: 'snomed-interaction-components/css/*.css',
                dest: 'snomed-interaction-components/dist/css/<%= pkg.name %>.css'
            },
            externalCss:{
                src:[
                    "ecl-builder/styles.css",
                    "css/bootstrap-theme.min.css",
                    "css/jquery.splitter.css",
                    "css/jquery-ui-1.10.4.custom.min.css",
                    "css/bootstrap.min.base.12.css",
                    "css/bootstrap-tour.css",
                    "css/popover-extra-placements.css",
                    "css/animate.css",
                    "css/bootstrap-multiselect.css",
                    "css/datatables.min.css",
                    'snomed-interaction-components/dist/css/<%= pkg.name %>.css'
                ],
                dest: 'css/external.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'snomed-interaction-components/dist/js/<%= pkg.name %>.js',
                dest: 'snomed-interaction-components/dist/js/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'snomed-interaction-components/dist/css/<%= pkg.name %>.css',
                dest: 'snomed-interaction-components/dist/css/<%= pkg.name %>.min.css'
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "JST"
                },
                files: {
                    "snomed-interaction-components/views/compiled/templates.js": "snomed-interaction-components/views/**/*.hbs"
                }
            }
        },        
        jshint: {
            all: ['js/**/*.js'],
            options: {
                reporter: require('jshint-stylish'),
                reporterOutput: 'dist/jshint-output.txt'
            }
        },       
        copy: {
            dev: {
                files: [{                
                    src: 'snomed-interaction-components/dist/js/<%= pkg.name %>.min.js',
                    dest: 'internal-libs/<%= pkg.name %>.min.js',
                },
                {                
                    src: 'snomed-interaction-components/dist/css/<%= pkg.name %>.min.css',
                    dest: 'css//<%= pkg.name %>.min.css',
                },
                {
                    src: 'node_modules/snomed-ecl-builder/output/*',
                    dest: 'internal-libs/'
                }]
            }
            
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'handlebars', 'concat','uglify', 'cssmin', 'copy']);
};
