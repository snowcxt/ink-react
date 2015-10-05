var React = require('react');
import {Html, Content, Row, Wrapper, Button} from "../"

var path = require('path');
var fs = require('fs');
var css = fs.readFileSync(path.join(__dirname, "style.css"), {
  encoding: 'utf-8'
});

module.exports = React.createClass({
  render: function() {
    return (
      <Html css={css} title="example">
        <Content>
          <Row>
            <Wrapper type="last">
              <h1>Welcome, Daneel Olivan</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
                <img height={300} src="http://placehold.it/580x300" width={580}/>
              </div>
            </Wrapper>
          </Row>
          <Row type="callout">
            <Wrapper className="panel" type="last">
              <p>Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae.
                <a href="#">Click it! »</a>
              </p>
            </Wrapper>
          </Row>
          <Row type="footer">
            <Wrapper className="left-text-pad" columns="six">
              <h5>Connect With Us:</h5>
              <Button className="tiny-button facebook" href="#">Facebook</Button>
              <br/>
              <Button className="tiny-button twitter" href="#">Twitter</Button>
              <br/>
              <Button className="tiny-button google-plus" href="#">Google +</Button>
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