'use strict';

var React = require('react');
var Header = require('./Header');

module.exports = React.createClass({
  displayName: 'exports',

  getDefaultProps: function getDefaultProps() {
    return {
      header: {
        title: "ink react",
        imageSrc: "http://placehold.it/200x50"
      }
    };
  },

  render: function render() {
    return React.createElement(
      'html',
      null,
      React.createElement(
        'head',
        null,
        React.createElement('meta', { content: 'text/html; charset=utf-8', 'http-equiv': 'Content-Type' }),
        React.createElement('meta', { content: 'width=device-width', name: 'viewport' }),
        React.createElement('style', { dangerouslySetInnerHTML: {
            __html: this.props.css
          } })
      ),
      React.createElement(
        'body',
        null,
        React.createElement(
          'table',
          { className: 'body' },
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { align: 'center', className: 'center', valign: 'top' },
                React.createElement(
                  'center',
                  null,
                  this.props.header ? React.createElement(Header, { imageSrc: this.props.header.imageSrc, title: this.props.header.title }) : null,
                  this.props.children
                )
              )
            )
          )
        )
      )
    );
  }
});