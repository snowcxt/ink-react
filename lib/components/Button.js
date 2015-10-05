'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'table',
      { className: this.props.className },
      React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          React.createElement(
            'a',
            { href: this.props.href },
            this.props.children
          )
        )
      )
    );
  }
});