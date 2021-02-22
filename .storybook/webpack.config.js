const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname)),
    },
  },
}
