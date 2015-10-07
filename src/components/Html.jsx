var React = require('react');
var Header = require('./Header');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      header: {
        title: "ink react",
        imageSrc: "http://placehold.it/200x50"
      }
    };
  },

  render: function() {
    return (
      <html>
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
          <meta content="width=device-width" name="viewport"/>
          <style dangerouslySetInnerHTML={{
            __html: this.props.css
          }}></style>
        </head>
        <body>
          <table className="body">
            <tbody>
              <tr>
                <td align="center" className="center" valign="top">
                  <center>
                    {this.props.header
                      ? <Header imageSrc={this.props.header.imageSrc} title={this.props.header.title}/>
                      : null}
                    {this.props.children}
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    );
  }
});