let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('sass/**/*.scss').pipe(sass()).pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
});