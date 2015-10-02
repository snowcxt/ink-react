require('babel/register');

var express = require('express'),
  React = require('react');

var app = express();

var template1 = require('./template1');
var ReactApp = React.createFactory(template1);

app
  .get('/', function(req, res) {
    res.send(React.renderToString(ReactApp()));
  });

app
  .listen(9876, function() {
    console.log("Express server listening on port " + 9876);
  });
