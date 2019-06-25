const fp = require("lodash/fp");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const BabelEsmPlugin = require("babel-esm-plugin");

const enhance = fp.compose(
  require("@zeit/next-typescript"),
  require("@zeit/next-mdx")()
  // Add more plugins here
);

module.exports = enhance({
  webpack(config, options) {
    const { defaultLoaders } = options;
    defaultLoaders.babel.options.presets = [
      "next/babel",
      "@zeit/next-typescript/babel"
    ];
    if (!options.isServer && !options.dev) {
      config.plugins.push(
        new BabelEsmPlugin({
          filename: file => {
            const originalFilename = config.output.filename;
            const name = originalFilename(file);
            return (name !== "[name]" ? name : file.chunk.name).replace(
              /\.js$/,
              ".es6.js"
            );
          },
          chunkFilename: config.output.chunkFilename.replace(
            /\.js$/,
            ".es6.js"
          ),
          beforeStartExecution: (plugins, options) => {
            options.presets = options.presets.filter(preset => {
              return (
                !Array.isArray(preset) || preset[0] !== "@babel/preset-env"
              );
            });
            options.presets = options.presets.map(preset => {
              if (preset === "next/babel") {
                return [
                  "next/babel",
                  {
                    "preset-env": { targets: { esmodules: true } }
                  }
                ];
              } else if (Array.isArray(preset) && preset[0] === "next/babel") {
                return [
                  "next/babel",
                  {
                    ...preset[1],
                    "preset-env": {
                      ...preset[1]["preset-env"],
                      targets: { esmodules: true }
                    }
                  }
                ];
              }
              return preset;
            });
          }
        })
      );
    }

    return config;
  }
});
