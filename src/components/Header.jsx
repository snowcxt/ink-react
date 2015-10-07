var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      title: "ink react",
      imageSrc: "http://placehold.it/200x50"
    };
  },

  render: function() {
    return (
      <table className="row header">
        <tbody>
          <tr>
            <td align="center" className="center">
              <center>
                <table className="container">
                  <tbody>
                    <tr>
                      <td className="wrapper last">
                        <table className="twelve columns">
                          <tbody>
                            <tr>
                              <td className="six sub-columns">
                                <img src={this.props.imageSrc}/>
                              </td>
                              <td className="six sub-columns last" style={{
                                textAlign: 'right',
                                verticalAlign: 'middle'
                              }}>
                                <span className="template-label">{this.props.title}</span>
                              </td>
                              <td className="expander"/>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>
        </tbody>
      </table>

    );
  }
});