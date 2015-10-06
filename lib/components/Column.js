"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  getDefaultProps: function getDefaultProps() {
    return {
      number: "twelve"
    };
  },
  render: function render() {
    return React.createElement(
      "table",
      { className: this.props.number + " columns" },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { className: this.props.className },
            this.props.children
          ),
          React.createElement("td", { className: "expander" })
        )
      )
    );
  }
});