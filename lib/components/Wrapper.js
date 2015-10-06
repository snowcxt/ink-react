"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "td",
      { className: "wrapper " + this.props.type },
      this.props.children
    );
  }
});