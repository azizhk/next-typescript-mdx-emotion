const fp = require('lodash/fp')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const enhance = fp.compose(
  require('@zeit/next-typescript')
  // Add more plugins here
)

module.exports = enhance({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer && options.dev)
      config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config
  }
})
