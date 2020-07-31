const buildTest = require('robot-eyes/buildTest')

const DEFAULT_OPTIONS = {
  delay: 1000
}
const test = buildTest(DEFAULT_OPTIONS)

describe('Report', function () {
  it('Index', function () {
    return test('/', this.test.fullTitle())
  })
})
