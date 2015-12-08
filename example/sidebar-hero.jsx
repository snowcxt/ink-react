var React = require('react');
import {Html, Content, Row, Wrapper, Column, Button} from "../"

var path = require('path');
var fs = require('fs');
var css = fs.readFileSync(path.join(__dirname, "style.css"), {
  encoding: 'utf-8'
});

module.exports = React.createClass({
  render: function() {
    return (
      <Html css={css} header={{title : "sidebar hero example"}}>
        <Content>
          <Row>
            <Wrapper type="last">
              <Column>
                <h1>Welcome, Daneel Olivan</h1>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                  </p>
                  <img height={300} src="http://placehold.it/580x300" width={580}/>
                </div>
              </Column>
            </Wrapper>
          </Row>
          <Row type="callout">
            <Wrapper type="last">
              <Column className="panel">
                <p>Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae.
                  <a href="#">Click it! »</a>
                </p>
              </Column>
            </Wrapper>
          </Row>
          <Row>
            <Wrapper>
              <Column number="six">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet.</p>
                <Button className="button" href="#">
                  Click Me!
                </Button>
              </Column>
            </Wrapper>
            <Wrapper type="last">
              <Column className="panel" number="six">
                <h6>Header Thing</h6>
                <p>Sub-head or something</p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">Just a Plain Link &raquo;</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr/>
              </Column>
              <br/>
              <Column className="panel" number="six">
                <h5>Connect With Us:</h5>
                <Button className="tiny-button facebook" href="#">Facebook</Button>
                <br/>
                <Button className="tiny-button twitter" href="#">Twitter</Button>
                <br/>
                <Button className="tiny-button google-plus" href="#">Google +</Button>
              </Column>
            </Wrapper>
          </Row>
          <Row type="footer">
            <Wrapper type="last">
              <Column className="right-text-pad" number="six">
                <h5>Contact Info:</h5>
                <p>Phone: 408.341.0600</p>
                <p>Email:
                  <a href="mailto:hseldon@trantor.com">hseldon@trantor.com</a>
                </p>
              </Column>
            </Wrapper>
          </Row>
        </Content>
      </Html>
    );
  }
})
