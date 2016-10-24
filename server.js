const webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config           = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(5175, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
});