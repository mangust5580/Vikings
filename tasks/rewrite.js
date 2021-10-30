const { src, dest } = require("gulp");

const revRewrite = require("gulp-rev-rewrite");
const { readFileSync } = require("fs");

const rewrite = () => {
  const manifest = readFileSync("app/rev.json");
  src("build/css/*.css")
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest("build/css"));
  return src("build/**/*.html")
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest("build"));
};

module.exports = rewrite;
