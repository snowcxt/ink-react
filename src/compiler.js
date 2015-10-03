var React = require('react'),
	juice = require("juice");

module.exports = function(template) {
	var ReactApp = React.createFactory(template);
	return juice(React.renderToStaticMarkup(ReactApp()));
};