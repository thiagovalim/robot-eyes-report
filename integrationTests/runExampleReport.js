const runServer = require('../runServer')
const { resolve } = require('path')

runServer([
  {
    name: 'visualize_index',
    viewports: [
      {
        name: '1920x1080',
        diffImage: resolve('./integrationTests/exampleImages/diff/visualize_index/visualize_index1920x1080.png'),
        referenceImage: resolve('./integrationTests/exampleImages/reference/visualize_index/visualize_index1920x1080.png'),
        testImage: resolve('./integrationTests/exampleImages/test/visualize_index/visualize_index1920x1080.png')
      },
      {
        name: '1366x768',
        diffImage: resolve('./integrationTests/exampleImages/diff/visualize_index/visualize_index1366x768.png'),
        referenceImage: resolve('./integrationTests/exampleImages/reference/visualize_index/visualize_index1366x768.png'),
        testImage: resolve('./integrationTests/exampleImages/test/visualize_index/visualize_index1366x768.png')
      }
    ]
  }
])
