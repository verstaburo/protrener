const browserSync = require('browser-sync').create();
const debuga = require('debuga');

module.exports = () => {
  browserSync.init({
    open: true,
    reloadOnRestart: true,
    reloadDebounce: 100,
    port: 3004,
    snippetOptions: {
      rules: {
        match: /<\/body>/i,
      },
    },
    server: {
      baseDir: [
        './dist1',
      ],
    },
    directory: false,
    middleware: [debuga()],
  });

  browserSync.watch('dist1/**/*').on('change', browserSync.reload);
};
