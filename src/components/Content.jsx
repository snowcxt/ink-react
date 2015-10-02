var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <table className="container">
        <tr>
          <td>{this.props.children}</td>
        </tr>
      </table>
    );
  }
});