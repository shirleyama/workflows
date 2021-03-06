var gulp = require ('gulp'),
    gutil = require ('gulp-util'),
    coffee = require ('gulp-coffee'),
    browserify = require ('gulp-browserify'),
    coffeesources = ('components/coffee/tagline.coffee'),
    concat = require('gulp-concat');

var coffeesources=['components/coffee/tagline.coffee'];

var jsSources = [
                'components/scripts/rclick.js',
                'components/scripts/pixgrid.js',
                'components/scripts/tagline.js',
                'components/scripts/template.js'
]

gulp.task ('coffee', function (){
    gulp.src(coffeesources)
    .pipe(coffee({bare:true})
          .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
    
});

gulp.task ('js', function (){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
    
});

    