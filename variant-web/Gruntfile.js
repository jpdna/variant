module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsopkg: grunt.file.readJSON('lib/jsorolla/package.json'),
        def: {
            name: 'variant',
            build: 'build/<%= pkg.version %>',
            jsorolla: 'lib/jsorolla'
        },

        concat: {
            dist: {
                src: [
                    'src/widgets/*.js',
                    'src/forms/*.js',
                    'src/variant.js'
                ],
                dest: '<%= def.build %>/<%= def.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= def.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%= def.build %>/<%= def.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            build: {
                files: [
                    {   expand: true, cwd: './src', src: ['va-config.js'], dest: '<%= def.build %>/' },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['vendor/**'], dest: '<%= def.build %>/'  },
                    {   expand: true, cwd: './<%= def.jsorolla %>', src: ['styles/**'], dest: '<%= def.build %>/'  },
                    {   expand: true, cwd: './<%= def.jsorolla %>/src/lib', src: ['worker*'], dest: '<%= def.build %>/' },
                    {   expand: true, cwd: './<%= def.jsorolla %>/build/<%= jsopkg.version %>/genome-viewer/', src: ['genome-viewer*.js', 'gv-config.js'], dest: '<%= def.build %>/' }
                ]
            }
        },
        clean: {
            dist: ['<%= def.build %>/']
        },
        htmlbuild: {
            build: {
                src: 'src/<%= def.name %>.html',
                dest: '<%= def.build %>/',
                options: {
                    beautify: true,
                    styles: {
                        'vendor': [
                            '<%= def.build %>/vendor/ext-5-beta/theme-babel-all.css',
                            '<%= def.build %>/vendor/jquery.qtip*.css',
                            '<%= def.build %>/vendor/bootstrap-*-dist/css/bootstrap.min.css',
                            '<%= def.build %>/vendor/typeahead.js-bootstrap.css',
                            '<%= def.build %>/vendor/jquery.simplecolorpicker.css'
                        ],
                        'css': ['<%= def.build %>/styles/css/style.css']
                    },
                    scripts: {
                        vendor: [
                            '<%= def.build %>/vendor/ext-5-beta/ext-all.js',
                            '<%= def.build %>/vendor/underscore*.js',
                            '<%= def.build %>/vendor/backbone*.js',
                            '<%= def.build %>/vendor/jquery.min.js',
                            '<%= def.build %>/vendor/bootstrap-*-dist/js/bootstrap.min.js',
                            '<%= def.build %>/vendor/typeahead.min.js',
                            '<%= def.build %>/vendor/jquery.cookie*.js',
                            '<%= def.build %>/vendor/purl*.js',
                            '<%= def.build %>/vendor/jquery.sha1*.js',
                            '<%= def.build %>/vendor/jquery.qtip*.js'
                        ],
                        config: [
                            '<%= def.build %>/gv-config.js'
                        ],
                        lib: [
                            '<%= def.build %>/genome-viewer.min.js'
                        ],
                        js: '<%= def.build %>/<%= def.name %>.min.js'
                    }

                }
            }
        },
        'curl-dir': {

        },
        rename: {
            dist: {
                files: [
                    {
                        src: ['<%= def.build %>/<%= def.name %>.html'],
                        dest: '<%= def.build %>/index.html'
                    }
                ]
            }
        },
        hub: {
            'genome-viewer': {
                src: ['lib/jsorolla/Gruntfile.js'],
                tasks: ['gv']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-hub');

    grunt.registerTask('log-deploy', 'Deploy path info', function (version) {
        grunt.log.writeln("DEPLOY COMMAND: scp -r build/" + grunt.config.data.pkg.version + " cafetero@mem16:/httpd/bioinfo/www-apps/" + grunt.config.data.def.name + "/");
    });

    // Default task.
    grunt.registerTask('default', ['hub', 'clean', 'concat', 'uglify', 'copy', 'htmlbuild', 'rename', 'log-deploy']);

};
