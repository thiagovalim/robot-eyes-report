const express = require('express')
const app = express()
const fs = require('fs')
const chalk = require('chalk')

const runServer = (testOutput, port) => {
  port = port || 3000

  const getViewport = (testName, viewportName) => testOutput
      .find(a => a.name === testName).viewports
      .find(a => a.name === viewportName)

  app.use(express.static(__dirname + '/dist'))

  app.get('/', function (req, res) {
    res.sendFile('./src/index.html', {root: __dirname})
  })

  app.get('/test_output', function (req, res) {
    res.send(testOutput)
  })

  app.get('/test_image', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    res.sendFile(vp.testImage)
  })

  app.get('/reference_image', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    res.sendFile(vp.referenceImage)
  })

  app.get('/diff_image', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    res.sendFile(vp.diffImage)
  })

  app.post('/approve', function (req, res) {
    const testName = req.query.test_name
    const viewport = req.query.viewport
    const vp = getViewport(testName, viewport)
    fs.copyFileSync(vp.testImage, vp.referenceImage)
    console.log(chalk.green(`Approved ${testName} ${viewport}`))
    res.sendStatus(200)
  })

  app.listen(port, '0.0.0.0', () => {
    console.log(chalk.blue(`report listening on http://localhost:${port}/`))
  })
}

module.exports = runServer