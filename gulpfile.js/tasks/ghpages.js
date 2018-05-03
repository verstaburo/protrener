const gulp = require('gulp');
const ghpages = require('gulp-gh-pages');

module.exports = () => gulp.src('dist1/**/*').pipe(ghpages());
