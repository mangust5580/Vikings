const { src } = require("gulp");
const webpConv = require("gulp-webp");
const changed = require("gulp-changed");
const multiDest = require("gulp-multi-dest");
const plumber = require("gulp-plumber");

const webp = () => {
  return src("build/images/**/*.+(png|jpg|jpeg)")
    .pipe(plumber())
    .pipe(
      changed("build/images", {
        extension: ".webp",
      })
    )
    .pipe(webpConv())
    .pipe(multiDest(["src/images", "build/images"]));
};

module.exports = webp;
