var React = require('react');

var Html = require('./components/Html');
var Content = require('./components/Content');
var Row = require('./components/Row');
var Wrapper = require('./components/Wrapper');
var Button = require('./components/Button');
module.exports = React.createClass({
  render: function() {
    return (
      <Html title="example">
        <Content>
          <Row>
            <Wrapper type="last">
              <h1>Hi, Susan Calvin</h1>
              <p className="lead">Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae.</p>
              <p>Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae. consequat vel lacus. Sed iaculis pulvinar ligula, ornare fringilla ante viverra et. In hac habitasse platea dictumst. Donec vel orci mi, eu congue justo. Integer eget odio est, eget malesuada lorem. Aenean sed tellus dui, vitae viverra risus. Nullam massa sapien, pulvinar eleifend fringilla id, convallis eget nisi. Mauris a sagittis dui. Pellentesque non lacinia mi. Fusce sit amet libero sit amet erat venenatis sollicitudin vitae vel eros. Cras nunc sapien, interdum sit amet porttitor ut, congue quis urna.</p>
            </Wrapper>
          </Row>
          <Row type="footer">
            <Wrapper columns="six" className="left-text-pad">
              <h5>Connect With Us:</h5>
              <Button href="#" type="facebook">Facebook</Button>
              <br/>
              <Button href="#" type="twitter">Twitter</Button>
              <br/>
              <Button href="#" type="google-plus">Google +</Button>
            </Wrapper>
            <Wrapper columns="six" type="last" className="last right-text-pad">
              <h5>Contact Info:</h5>
              <p>Phone: 408.341.0600</p>
              <p>Email:
                <a href="mailto:hseldon@trantor.com">hseldon@trantor.com</a>
              </p>
            </Wrapper>
          </Row>
        </Content>
      </Html>
    );
  }
})