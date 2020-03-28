var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');

gulp.task('styles', function(done) {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'))
        done()
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',gulp.series('styles'));
});
