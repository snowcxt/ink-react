var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <table className={this.props.className}>
        <tr>
          <td>
            <a href={this.props.href}>{this.props.children}</a>
          </td>
        </tr>
      </table>
    );
  }
});