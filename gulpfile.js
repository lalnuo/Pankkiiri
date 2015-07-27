// REMEMBER TO RETURN SO DEPENDENCIES MIGHT EVEN WORK!

var gulp = require('gulp');
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

gulp.task('inject-files', ['scripts'], function() {
  var target = gulp.src('src/index.html')
  var sources = gulp.src(['./build/js/*.js'])

  return target.pipe(inject(sources, {ignorePath: 'build/', addRootSlash: false}))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['inject-files'])
