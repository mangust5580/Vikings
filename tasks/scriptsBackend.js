const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify-es").default;
const notify = require("gulp-notify");
let isProd = false; // dev by default

const scriptsBackend = () => {
  src("./src/js/vendor/**.js")
    .pipe(concat("vendor.js"))
    .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
    .pipe(dest("./build/js/"));
  return src([
    "./src/js/functions/**.js",
    "./src/js/components/**.js",
    "./src/js/main.js",
  ]).pipe(dest("./build/js"));
};

module.exports = scriptsBackend;
