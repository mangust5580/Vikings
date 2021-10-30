const { src, dest } = require("gulp");
const changed = require("gulp-changed");
const ttf2woff = require("gulp-ttf2woff");

const woff = (done) => {
  return src("src/fonts/**/*.ttf")
    .pipe(
      changed("build/fonts", {
        extension: "woff",
        hasChanged: changed.compareLastModifiedTime,
      })
    )
    .pipe(ttf2woff())
    .pipe(dest("build/fonts"));
  done();
};

module.exports = woff;
