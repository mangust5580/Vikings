const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const stylesBackend = () => {
  return src("./src/scss/**/*.scss")
    .pipe(sass().on("error", notify.onError()))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("./build/css/"));
};

module.exports = stylesBackend;
