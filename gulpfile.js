var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');

gulp.task('styles', function(done) {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'))
        done()
});

// Nunjucks task
gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|njk)', '!app/pages/index.njk')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('app'))
  });
  
  // Nunjucks Index
  gulp.task('njk-index', function() {
    // Gets index.njk
    return gulp.src('app/pages/index.+(html|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('./'))
  });

  //TODO make index not appear in app (gulp-clean)
// Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',gulp.series('styles'));
    gulp.watch('app/**/**/*.njk',gulp.series('nunjucks'));
    gulp.watch('app/pages/index.njk',gulp.series('njk-index'));
});