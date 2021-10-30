const { src, dest } = require("gulp");

const concat = require("gulp-concat");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify-es").default;
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();

let isProd = false;

const scripts = () => {
  src("./src/js/vendor/**.js")
    .pipe(concat("vendor.js"))
    .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
    .pipe(dest("./build/js/"));
  return src([
    "./src/js/functions/**.js",
    "./src/js/components/**.js",
    "./src/js/main.js",
  ])
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
    .pipe(gulpif(!isProd, sourcemaps.write(".")))
    .pipe(dest("./build/js"))
    .pipe(browserSync.stream());
};

module.exports = scripts;
