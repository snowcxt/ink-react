"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "td",
      { className: "wrapper " + this.props.type },
      React.createElement(
        "table",
        { className: this.props.columns + " columns" },
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
      )
    );
  }
});