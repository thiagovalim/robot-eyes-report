const express = require('express');
const app = express();
const fs = require('fs')

const openReport = (config, testOutput) => {
  const getViewport = (testName, viewportName) => testOutput
      .find(a => a.name === testName).viewports
      .find(a => a.name === viewportName)

  app.use(express.static('./dist'))

  app.get('/', function (req, res) {
    res.sendFile('./src/index.html', {root: __dirname})
  });

  app.get('/test_output', function (req, res) {
    res.send(testOutput)
  });

  app.get('/test_image', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    res.sendFile(vp.testImage)
  });

  app.get('/reference_image', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    res.sendFile(vp.referenceImage)
  });

  app.get('/diff_image', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    res.sendFile(vp.diffImage)
  });

  app.post('/approve', function (req, res) {
    const vp = getViewport(req.query.test_name, req.query.viewport)
    fs.copyFileSync(vp.testImage, vp.referenceImage)
    res.sendStatus(200)
  });

  app.listen(3000);
}

module.exports = openReport