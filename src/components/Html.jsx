var React = require('react'),
  path = require('path'),
  fs = require('fs');

var Header = require('./Header');

module.exports = React.createClass({
  render: function() {
    var css = fs.readFileSync(path.join(__dirname, "/../style.css"), {
      encoding: 'utf-8'
    });

    return (
      <html>
        <head>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
          <meta content="width=device-width" name="viewport"/>
          <style dangerouslySetInnerHTML={{
            __html: css
          }}></style>
        </head>
        <body>
          <table className="body">
            <tbody>
              <tr>
                <td align="center" className="center" valign="top">
                  <center>
                    <Header image="http://placehold.it/200x50" title={this.props.title}/>
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