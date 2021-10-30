const { src, dest } = require("gulp");

const image = require("gulp-image");
const gulpif = require("gulp-if");

let isProd = false;

const images = () => {
  return src([
    "./src/images/**.jpg",
    "./src/images/**.png",
    "./src/images/**.jpeg",
    "./src/images/*.svg",
    "./src/images/*.ico",
    "./src/images/**/*.jpg",
    "./src/images/**/*.png",
    "./src/images/**/*.jpeg",
    "./src/images/**/*.avif",
    "./src/images/**/*.webp",
  ])
    .pipe(gulpif(isProd, image()))
    .pipe(dest("./build/images"));
};

module.exports = images;
