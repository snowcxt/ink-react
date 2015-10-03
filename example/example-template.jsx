var React = require('react');
import {Html, Content, Row, Wrapper, Button} from "../src"

var path = require('path');
var fs = require('fs');
var css = fs.readFileSync(path.join(__dirname, "style.css"), {
      encoding: 'utf-8'
    });

module.exports = React.createClass({
  render: function() {
    return (
      <Html title="example" css={css}>
        <Content>
          <Row>
            <Wrapper type="last">
              <h1>Hi, Susan Calvin</h1>
              <p className="lead">Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae.</p>
              <p>Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae. consequat vel lacus. Sed iaculis pulvinar ligula, ornare fringilla ante viverra et. In hac habitasse platea dictumst. Donec vel orci mi, eu congue justo. Integer eget odio est, eget malesuada lorem. Aenean sed tellus dui, vitae viverra risus. Nullam massa sapien, pulvinar eleifend fringilla id, convallis eget nisi. Mauris a sagittis dui. Pellentesque non lacinia mi. Fusce sit amet libero sit amet erat venenatis sollicitudin vitae vel eros. Cras nunc sapien, interdum sit amet porttitor ut, congue quis urna.</p>
            </Wrapper>
          </Row>
          <Row type="callout">
            <Wrapper type="last" className="panel">
               <p>Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae. <a href="#">Click it! »</a></p>
            </Wrapper>
          </Row>
          <Row type="footer">
            <Wrapper className="left-text-pad" columns="six">
              <h5>Connect With Us:</h5>
              <Button href="#" type="facebook">Facebook</Button>
              <br/>
              <Button href="#" type="twitter">Twitter</Button>
              <br/>
              <Button href="#" type="google-plus">Google +</Button>
            </Wrapper>
            <Wrapper className="right-text-pad" columns="six" type="last">
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