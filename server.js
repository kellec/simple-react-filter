var express     = require('express');
var browserify  = require('connect-browserify');

var development = process.env.NODE_ENV !== 'production';

var app = express();

if (development) {
  app.get('/assets/bundle.js',
    browserify('./client', {
      debug: true,
      watch: true
    }));
}

app
  .use(express.static(__dirname))
  .listen(3000, function() {
    console.log('Point your browser at http://localhost:3000');
  });
