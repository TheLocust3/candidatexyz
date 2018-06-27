const { environment } = require('@rails/webpacker')

environment.plugins.get("UglifyJs").options.uglifyOptions.ecma = 5

module.exports = environment
