const gulp = require('gulp');
const newer = require('gulp-newer');

const miscPath = ['app/static/misc/**/*', 'app/static/misc/.*'];

module.exports = () => (
  gulp
    .src(miscPath, { since: gulp.lastRun('copy') })
    .pipe(newer('dist1'))
    .pipe(gulp.dest('dist1'))
);
