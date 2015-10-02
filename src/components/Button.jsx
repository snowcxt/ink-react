var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <table className={"tiny-button " + this.props.type}>
        <tr>
          <td>
            <a href={this.props.href}>{this.props.children}</a>
          </td>
        </tr>
      </table>
    );
  }
});