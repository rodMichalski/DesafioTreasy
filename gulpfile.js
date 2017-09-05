var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');
var del = require('del');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('clean', function () {
  return del('dist');
});

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function () {
  return gulp.src('src/js/**/*.js')
      .pipe(uglify({mangle: false}))
      .pipe(gulp.dest('dist/js'))
});

gulp.task('libs-js', function() {
  var libs = [{file: '/angular.min.js', path: 'angular'},
      {file: 'bootstrap.min.js', path: 'bootstrap/dist/js'},
      {file: 'bootstrap.min.css', path: 'bootstrap/dist/css'},
      {file: 'glyphicons-halflings-regular.ttf', path: 'bootstrap/dist/fonts'},
      {file: 'glyphicons-halflings-regular.woff', path: 'bootstrap/dist/fonts'},
  		{file: 'glyphicons-halflings-regular.woff2', path: 'bootstrap/dist/fonts'},
  		{file: 'jquery.min.js', path: 'jquery/dist'}]
  
  libs.forEach(function(lib) {
	  gulp.src('src/libs/' + lib.path + '/' + lib.file).pipe(gulp.dest('dist/libs/' + lib.path));
  })
});
 
gulp.task('minify-html', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('dev', function() {
  connect.server({
    root: 'src',
    port: 8000
  })
});

gulp.task('server', function() {
    connect.server({
    root: 'dist',
    port: 9000
  })
});


gulp.task('build', ['clean', 'minify-css', 'libs-js', 'minify-js', 'minify-html']);

gulp.task('default', ['dev']);
