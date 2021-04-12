const path = require('path')
module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json')
  }
}
