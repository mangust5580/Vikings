const gulp = require("gulp");

const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.clean = tasks.clean;
exports.svgSprites = tasks.svgSprites;
exports.styles = tasks.styles;
exports.stylesBackend = tasks.stylesBackend;
exports.scripts = tasks.scripts;
exports.scriptsBackend = tasks.scriptsBackend;
exports.assets = tasks.assets;
exports.images = tasks.images;
exports.htmlInclude = tasks.htmlInclude;
exports.watchFiles = tasks.watchFiles;
exports.cache = tasks.cache;
exports.rewrite = tasks.rewrite;
exports.htmlMinify = tasks.htmlMinify;
exports.toProd = tasks.toProd;
exports.woff2 = tasks.woff2;
exports.woff = tasks.woff;
exports.webp = tasks.webp;
exports.avif = tasks.avif;

exports.default = gulp.series(
  exports.htmlInclude,
  exports.scripts,
  exports.styles,
  exports.assets,
  exports.images,
  exports.svgSprites,
  exports.watchFiles,
  exports.woff2,
  exports.woff,
  exports.webp,
  exports.avif
);

exports.build = gulp.series(
  exports.toProd,
  exports.htmlInclude,
  exports.scripts,
  exports.styles,
  exports.assets,
  exports.images,
  exports.svgSprites,
  exports.htmlMinify,
  exports.woff2,
  exports.woff,
  exports.webp,
  exports.avif
);

exports.cache = gulp.series(exports.cache, exports.rewrite);

exports.backend = gulp.series(
  exports.toProd,
  exports.htmlInclude,
  exports.scriptsBackend,
  exports.stylesBackend,
  exports.assets,
  exports.images,
  exports.svgSprites,
  exports.woff2,
  exports.woff,
  exports.webp,
  exports.avif
);
