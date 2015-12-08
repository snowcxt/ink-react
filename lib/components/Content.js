"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "table",
      { className: "container" },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            this.props.children
          )
        )
      )
    );
  }
});