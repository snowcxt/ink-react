require('babel/register');

var express = require('express'),
	compiler = require('./compiler');
var app = express();

app
  .get('/', function(req, res) {
    res.send(compiler(require('./template1')));
  });

app
  .listen(9876, function() {
    console.log("Express server listening on port " + 9876);
  });
