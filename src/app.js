var express = require('express'),
    path = require('path'),
    html = require('./components/html');
var React = require('react');

var app = express();

var ReactApp = React.createFactory(html);

app.get('/', function(req, res) {
    res.send(React.renderToString(ReactApp({})));
});

app.listen(9876, function() {
    console.log("Express server listening on port " + 9876);
});
