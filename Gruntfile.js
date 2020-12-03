/**
 * Created by quuyely on 26/12/19.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["snomed-interaction-components/dist", "snomed-interaction-components/views/compiled"],
        concat: {
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
                dest: 'snomed-interaction-components/dist/js/<%= pkg.name %>.js'
            },
            css: {
                src: 'snomed-interaction-components/css/*.css',
                dest: 'snomed-interaction-components/dist/css/<%= pkg.name %>.css'
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
