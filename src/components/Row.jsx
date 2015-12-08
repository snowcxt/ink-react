var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      type: ""
    };
  },
  render: function() {
    return (
      <table className={"row " + this.props.type}>
        <tbody>
          <tr>
            {this.props.children}
          </tr>
        </tbody>
      </table>
    );
  }
});
