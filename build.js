const webpack = require('webpack')
const getWebpackConfig = require('./webpack.config')

const build = () => {
  return new Promise((resolve, reject) => {
    const webpackConfig = getWebpackConfig()
    webpack(webpackConfig, async (err, stats) => {
      if (err) {
        reject(err)
      } else if (stats.hasErrors()) {
        reject(stats.compilation.errors)
      } else {
        resolve()
      }
    });
  })
}

module.exports = build