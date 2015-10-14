'use strict';

var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = function (template, props) {
	var ReactApp = React.createFactory(template);
	return ReactDOMServer.renderToStaticMarkup(ReactApp(props));
};