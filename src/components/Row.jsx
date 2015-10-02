var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      row: "",
      wrap: "last",
      columns: "twelve"
    };
  },
  render: function() {
    return (
      <table className={"row " + this.props.row}>
        <tr>
          <td className={"wrapper " + this.props.wrap}>

            <table className={this.props.columns + " columns"}>
              <tr>
                <td>{this.props.children}</td>
                <td className="expander"></td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    );
  }
});