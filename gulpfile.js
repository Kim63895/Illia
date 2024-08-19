
const { watch, series } = require('gulp')
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));

// gulp.task()
// gulp.src()
// gulp.prependListener()
// gulp.task()
// gulp.watch()

gulp.task('sass', function() {
    return gulp.src('App/scss/style.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(cssnano())
     .pipe(gulp.dest('dest/css'))
}
)
//  gulp.task('watch', function(){
//      gulp.watch('app/scss/*.scss', ['sass'])

//  })
gulp.task ('watch', function() {
    watch('App/scss/*.scss', gulp.series('sass'))
})