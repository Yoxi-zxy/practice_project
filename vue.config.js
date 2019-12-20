const path = require('path');

const resolve = dir => path.join(__dirname, dir);
const BASE_URL = process.env.NODE_ENV === 'procution' ? './' : '/';
module.exports = {
  lintOnSave: true,
  publicPath: BASE_URL,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://106.12.156.88',
  },
};
