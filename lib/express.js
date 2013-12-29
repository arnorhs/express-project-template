/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var erc = require('express-route-controller');
var browserify = require('browserify-middleware');

var rootDir = path.join(__dirname, "..");
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(rootDir, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(rootDir, 'public')));
app.use(express.static(path.join(rootDir, 'public')));

// global locals in templates
app.locals({
    title: "My title"
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/main.js', browserify(path.join(rootDir, 'client/main.js')));

erc(app, {
    controllers: path.join(rootDir, 'controllers'),
    routes: require(path.join(rootDir, 'config/routes.json'))
});

module.exports = function() {
    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });
};

