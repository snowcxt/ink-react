"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  getDefaultProps: function getDefaultProps() {
    return {
      title: "ink react",
      imageSrc: "http://placehold.it/200x50"
    };
  },

  render: function render() {
    return React.createElement(
      "table",
      { className: "row header" },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { align: "center", className: "center" },
            React.createElement(
              "center",
              null,
              React.createElement(
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
                      { className: "wrapper last" },
                      React.createElement(
                        "table",
                        { className: "twelve columns" },
                        React.createElement(
                          "tbody",
                          null,
                          React.createElement(
                            "tr",
                            null,
                            React.createElement(
                              "td",
                              { className: "six sub-columns" },
                              React.createElement("img", { src: this.props.imageSrc })
                            ),
                            React.createElement(
                              "td",
                              { className: "six sub-columns last", style: {
                                  textAlign: 'right',
                                  verticalAlign: 'middle'
                                } },
                              React.createElement(
                                "span",
                                { className: "template-label" },
                                this.props.title
                              )
                            ),
                            React.createElement("td", { className: "expander" })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});