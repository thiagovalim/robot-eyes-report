const webpack = require('webpack')
const getWebpackConfig = require('./webpack.config')
const exec = require('child_process').exec

const openReport = () => {
  const webpackConfig = getWebpackConfig()
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err, stats)
    }
    console.log('termino')
  });


  exec(`npx electron .`, (a, b, c) => {
    console.log(a, b, c)
  })
}

openReport()