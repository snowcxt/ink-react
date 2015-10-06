var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <td className={"wrapper " + this.props.type}>
        {this.props.children}
      </td>
    );
  }
});