var React = require('react');

module.exports = function(template) {
	var ReactApp = React.createFactory(template);
	return React.renderToStaticMarkup(ReactApp());
};