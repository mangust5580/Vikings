const toProd = (done) => {
  isProd = true;
  done();
};

module.exports = toProd;
