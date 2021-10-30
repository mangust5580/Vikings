const { src, dest } = require("gulp");
const gulpif = require("gulp-if");
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

let isProd = false;

const styles = () => {
  return src("./src/scss/**/*.scss")
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass().on("error", notify.onError()))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulpif(isProd, cleanCSS({ level: 2 })))
    .pipe(gulpif(!isProd, sourcemaps.write(".")))
    .pipe(dest("./build/css/"))
    .pipe(browserSync.stream());
};

module.exports = styles;
