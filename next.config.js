const fp = require("lodash/fp");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const enhance = fp.compose(
  require("@zeit/next-typescript"),
  require("@zeit/next-mdx")(),
  require("next-asset-filename")({
    appendHash: true
  })
  // Add more plugins here
);

module.exports = enhance({
  exportPathMap: function(defaultPathMap) {
    return {
      ...defaultPathMap,
      "/markdown-custom": {
        page: "/markdown"
      }
    };
  },
  async generateBuildId() {
    return "const";
  },
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer && options.dev)
      config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  }
});
