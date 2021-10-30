const { watch, parallel, series } = require("gulp");

const browserSync = require("browser-sync").create();

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });

  watch("./src/scss/**/*.scss", parallel("styles"));
  watch("./build/css/*.css").on("change", browserSync.reload);
  watch("./src/js/**/*.js", parallel("scripts"));
  watch("./src/partials/**/*.html", parallel("htmlInclude"));
  watch("./src/*.html", parallel("htmlInclude"));
  watch("./build/*.html").on("change", browserSync.reload);
  watch("./src/assets/**", parallel("assets"));
  watch("./src/images/*.{jpg,jpeg,png,svg}", parallel("images"));
  watch("./src/images/**/*.{jpg,jpeg,png}", series("images", "webp", "avif"));
  watch("./src/images/sprite/svg/**.svg", parallel("svgSprites"));
  watch("./src/fonts/**/*.ttf", series("woff2", "woff"));
  watch("./src/data/**/*.json", parallel("htmlInclude"));
};

module.exports = watchFiles;
