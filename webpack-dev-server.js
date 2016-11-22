var Express = require('express');
var webpack = require('webpack');
var path = require('path');

var webpackConfig = require('./dev.config');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(webpackConfig);

var host = '0.0.0.0';
var port = 3000;
var hot = true;

var serverOptions = {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true},
  noInfo: true,
  inline:true,
  lazy:false,
};

var app = new Express();


app.use(devMiddleware(compiler, serverOptions));

app.use(hotMiddleware(compiler));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
//
// app.use(require('webpack-dev-middleware')(compiler, serverOptions));
// // hot reload
// if(hot)
//   app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> Webpack development server listening on port %s', port);
  }
});
