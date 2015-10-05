require('babel/register');

var express = require('express'),
    compiler = require('../').compiler,
    app = express();

app.get('/', function(req, res) {
    res.send(compiler(require('./sidebar-hero')));
});

app.listen(9876, function() {
    console.log("Express server listening on port " + 9876);
});
