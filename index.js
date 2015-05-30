var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

app.use('/healthcheck', function (req, res, next) {
  res.statusCode = 200;
  res.end();
});

app.use(serveStatic(__dirname + '/public'));

app.listen(8080);