const { src, dest } = require("gulp");

const htmlmin = require("gulp-htmlmin");

const htmlMinify = () => {
  return src("build/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("build"));
};

module.exports = htmlMinify;
