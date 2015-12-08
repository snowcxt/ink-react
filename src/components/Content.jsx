var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <table className="container">
        <tbody>
          <tr>
            <td>{this.props.children}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});
