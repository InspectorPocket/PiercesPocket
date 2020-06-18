var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var rev = require('gulp-rev');

// Sass Bundle
gulp.task('styles', function(done) {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/build'))
});

// JS Bundle
gulp.task('pack-js', function () {    
  return gulp.src('app/js/*.js')
      .pipe(concat('bundle.js'))
      .pipe(minify({
        ext:{ min:'.js' },
        noSource: true
      }))
      .pipe(gulp.dest('public/build'))
});

// Nunjucks Task
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

// Watch Task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',gulp.series('styles'));
    gulp.watch('app/js/*.js',gulp.series('pack-js'));
    gulp.watch('app/**/**/*.njk',gulp.series('nunjucks', 'njk-index'));
});



// Cache busting attempt
// // Sass Bundle
// gulp.task('styles', function(done) {
//     return gulp.src('app/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(cleanCSS({compatibility: 'ie8'}))

//         .pipe(rev())
//             .pipe(gulp.dest('public/build/css'))
//             .pipe(rev.manifest('public/build/rev-manifest.json', {
//               merge: true
//             }))
//         .pipe(gulp.dest('./'))

//         // done();
// });

// // JS Bundle
// gulp.task('pack-js', function () {    
//   return gulp.src('app/js/*.js')
//       .pipe(concat('bundle.js'))
//       .pipe(minify({
//         ext:{ min:'.js' },
//         noSource: true
//       }))

//       .pipe(rev())
//           .pipe(gulp.dest('public/build/js'))
//           .pipe(rev.manifest('public/build/rev-manifest.json', {
//             merge: true
//         }))
//       .pipe(gulp.dest('./'));
// });