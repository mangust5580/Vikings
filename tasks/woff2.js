const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const ttf2woff2 = require("gulp-ttftowoff2");

const woff2 = (done) => {
  return src("src/fonts/**/*.ttf")
    .pipe(
      changed("build/fonts", {
        extension: ".woff2",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff2())
    .pipe(dest("build/fonts"));
  done();
};

module.exports = woff2;
