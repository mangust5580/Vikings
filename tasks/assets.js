const { src, dest } = require("gulp");

const assets = () => {
  return src("./src/assets/**").pipe(dest("./build"));
};

module.exports = assets;
