import React, { Component } from "react";
import { Form, InputGroup, Col } from "react-bootstrap";

class Section3 extends Component {
  render() {
    return (
      <div>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cavity Type:</Form.Label>
            <Form.Control as="select" name="cavityType">
              <option>RCR</option>
              <option>Circle</option>
              <option>Ellipse</option>
              <option>Lineal</option>
              <option>Cross</option>
              <option>Special</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Special Cavity Type:</Form.Label>
            <Form.Control as="select" name="specialCavityType">
              <option>n/a</option>
              <option>Simple</option>
              <option>Moderate</option>
              <option>Grid</option>
              <option>Complex</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                No. ac
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="numberAcross" />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Size ac
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="sizeAcross" />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                No. ar
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="numberAround" />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Size ar
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="sizeAround" />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Eng/Cav*:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="engCav" />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Tot Eng Amt
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="totalEngAmt" />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Perf:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control as="select" aria-label="default" name="perf">
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                SI #:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control aria-label="default" name="siNumber" />
          </InputGroup>
        </Form.Row>
      </div>
    );
  }
}

export default Section3;
