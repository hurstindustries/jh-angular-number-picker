var gulp = require('gulp');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

var projectFile = require('./package.json');
var src = './src';
var build = './dist';


gulp.task('css', function() {
    return gulp.src(src + '/**/*.css')
        .pipe(rename(projectFile.name + '.css'))
        .pipe(gulp.dest(build))
        .pipe(rename(projectFile.name + '.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(build));
});

gulp.task('js', function() {
    return gulp.src(src + '/**/*.js')
        .pipe(rename(projectFile.name + '.js'))
        .pipe(gulp.dest(build))
        .pipe(uglify())
        .pipe(rename(projectFile.name + '.min.js'))
        .pipe(gulp.dest(build));
});

gulp.task('clean', function(callback){
    return rimraf(build, callback)
});

gulp.task('default', function(callback) {

    runSequence('clean', ['css', 'js'], callback);

});