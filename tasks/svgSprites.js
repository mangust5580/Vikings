const { src, dest } = require("gulp");
const svgSprite = require("gulp-svg-sprite");

const svgSprites = () => {
  return src("./src/images/sprite/svg/**.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("./build/images"));
};

module.exports = svgSprites;
