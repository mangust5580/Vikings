const { src } = require("gulp");
const changed = require("gulp-changed");
const multiDest = require("gulp-multi-dest");
const plumber = require("gulp-plumber");
const gulpAvif = require("gulp-avif");

const avif = () => {
  return src("build/images/**/*.+(png|jpg|jpeg)")
    .pipe(plumber())
    .pipe(
      changed("build/images", {
        extension: ".avif",
      })
    )
    .pipe(gulpAvif())
    .pipe(multiDest(["src/images", "build/images"]));
};

module.exports = avif;
