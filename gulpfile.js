var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');

gulp.task('styles', function(done) {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'))
        done()
});

// Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',gulp.series('styles'));
    gulp.watch('app/**/**/*.njk',gulp.series('nunjucks'));
});

// Nunjucks task
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});