
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./beradex-sdk.cjs.production.min.js')
} else {
  module.exports = require('./beradex-sdk.cjs.development.js')
}
