"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  getDefaultProps: function getDefaultProps() {
    return {
      type: ""
    };
  },
  render: function render() {
    return React.createElement(
      "table",
      { className: "row " + this.props.type },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          this.props.children
        )
      )
    );
  }
});