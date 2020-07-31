const runServer = require('../runServer')
const { resolve } = require('path')

runServer([
  {
    name: 'visualize_index',
    viewports: [
      {
        name: '1920x1080',
        diffImage: resolve('./integrationTests/images/diff/visualize_index/visualize_index1920x1080.png'),
        referenceImage: resolve('./integrationTests/images/reference/visualize_index/visualize_index1920x1080.png'),
        testImage: resolve('./integrationTests/images/test/visualize_index/visualize_index1920x1080.png')
      }
    ]
  }
])
