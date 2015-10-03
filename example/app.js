var express = require('express'),
    compiler = require('../src').compiler,
    app = express();

app.get('/', function(req, res) {
    res.send(compiler(require('./example-template')));
});

app.listen(9876, function() {
    console.log("Express server listening on port " + 9876);
});
