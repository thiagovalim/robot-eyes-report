const chalk = require('chalk')
const build = require('./build')
const runServer = require('./runServer')

module.exports = testOutput => {
  build()
    .then(() => {
      console.log(chalk.green('Build succeeded'));
      runServer(testOutput)
    })
    .catch(e => console.log(chalk.red(e)))
}