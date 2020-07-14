const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: 'source-map',
  plugins: [new webpack.DefinePlugin({}), new BundleAnalyzerPlugin()],
};
