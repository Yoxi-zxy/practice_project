const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const BASE_URL = process.env.NODE_ENV === 'procution' ? './' : '/';
module.exports = {
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [require('postcss-px2rem')({
          remUnit: 75
        })]
      }
    }
  },
  lintOnSave: true,
  publicPath: BASE_URL,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://106.12.156.88'
  }
};
