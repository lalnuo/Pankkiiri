var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  return gulp.src('src/js/app.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('lint', function() {
    return gulp.src('./src/js/**/*.js')
      .pipe(jshint({curly: false, strict: false}))
      .pipe(jshint.reporter('default'));
});

gulp.task('inject-files', ['scripts'], function() {
  var target = gulp.src('src/index.html')
  var sources = gulp.src(['./build/js/*.js'])

  return target.pipe(inject(sources, {ignorePath: 'build/', addRootSlash: false}))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['inject-files'])
