var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <td className={"wrapper " + this.props.type}>
        <table className={this.props.columns + " columns"}>
          <tbody>
            <tr>
              <td className={this.props.className}>
                {this.props.children}
              </td>
              <td className="expander"/>
            </tr>
          </tbody>
        </table>
      </td>
    );
  }
});