const express              = require('express');
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path                 = require('path');
const config               = require('./webpack.config');

const app = express();

if (process.env !== 'production') {
  const compiler          = webpack(config);
  const webpackMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(webpackMiddleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('/', (req, res) => {
    const html = webpackMiddleware.fileSystem.readFileSync(path.join(__dirname, '/app/index.html')).toString();
    res.write(html);
    res.end();
  });
}

app.listen(5555, () => {
  console.log('Example app listening on port 5555!');
});
