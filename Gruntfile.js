module.exports = function(grunt) {
    grunt.initConfig({
        stylus: {
          compile: {
            options: {
              paths: [
                'styl']
            },
            files: {
              'css/main.css': 'styl/main.styl'
            }
          }
        },
        autoprefixer: {
            dist: {
                src: 'css/main.css',
                dest: 'css/main.css'
            }
        },
        cssmin: {
            compress: {
                files: {
                    'css/main.css': ['css/main.css']
                }
            }
        },
        watch: {
            stylus: {
              files: ['styl/**/*.styl'],
              tasks: ['stylus:compile', 'autoprefixer', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};