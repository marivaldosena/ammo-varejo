const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

sass.compiler = require('node-sass');

//task para o sass
gulp.task('sass', function () {
  return gulp.src('./client/assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/dist'));
});

//task para o watch
gulp.task('watch', function () {
  gulp.watch('./client/assets/sass/**/*.scss', ['sass']);
});

//task default gulp
gulp.task('default', ['sass']);