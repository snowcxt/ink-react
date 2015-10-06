var React = require('react');

module.exports = function(template, props) {
	var ReactApp = React.createFactory(template);
	return React.renderToStaticMarkup(ReactApp(props));
};