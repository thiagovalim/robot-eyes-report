const webpack = require('webpack')
const getWebpackConfig = require('./webpack.config')

const openReport = (errorsOutput) => {
  const webpackConfig = getWebpackConfig()
  webpack(webpackConfig, async (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err, stats)
    } else {
      console.log('foi')
    }
  });
}

openReport()