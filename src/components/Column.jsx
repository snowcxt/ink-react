var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      number: "twelve"
    };
  },
  render: function() {
    return (
      <table className={this.props.number + " columns"}>
        <tbody>
          <tr>
            <td className={this.props.className}>
              {this.props.children}
            </td>
            <td class="expander"></td>
          </tr>
        </tbody>
      </table>
    );
  }
});