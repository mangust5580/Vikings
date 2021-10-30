const { src, dest } = require("gulp");

const fileInclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();

const htmlInclude = () => {
  return src(["./src/*.html"])
    .pipe(
      fileInclude({
        prefix: "@",
        basepath: "src/partials/",
      })
    )
    .pipe(dest("./build"))
    .pipe(browserSync.stream());
};

module.exports = htmlInclude;
