const fp = require("lodash/fp");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ClientBuildManifestPlugin = require("./utils/webpack/client-manifest-plugin");

const enhance = fp.compose(
  require("@zeit/next-typescript"),
  require("@zeit/next-mdx")()
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
    return "assets";
  },
  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (isServer && dev) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    if (isServer) {
      config.node = {
        ...config.node,
        __dirname: false
      };
    }

    if (!dev && !isServer) {
      const outputFilename = config.output.filename;
      config.output.filename = file => {
        const { chunk } = file;
        if (/\.js$/.test(chunk.name)) {
          return chunk.name.replace(/\.js$/, "-[contenthash].js");
        }
        return outputFilename(file);
      };

      config.plugins.push(new ClientBuildManifestPlugin());
    }

    return config;
  }
});
