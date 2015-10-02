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
        <tr>
          {this.props.children}
        </tr>
      </table>
    );
  }
});