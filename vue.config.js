module.exports = {
  css: {
    modules: true,
  },
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
