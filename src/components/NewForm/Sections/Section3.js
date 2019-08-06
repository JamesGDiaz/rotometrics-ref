import React, { Component } from "react";
import { Form, InputGroup, Col } from "react-bootstrap";

class Section3 extends Component {
  render() {
    return (
      <div>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Cavity Type:</Form.Label>
            <Form.Control
              as="select"
              name="cavityType"
              onChange={this.props.handleChange}
              value={this.props.values.cavityType}
              isInvalid={!!this.props.errors.cavityType}
            >
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
            <Form.Control
              as="select"
              name="specialCavityType"
              onChange={this.props.handleChange}
              value={this.props.values.specialCavityType}
              isInvalid={!!this.props.errors.specialCavityType}
            >
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
            <Form.Control
              aria-label="default"
              name="numberAcross"
              onChange={this.props.handleChange}
              value={this.props.values.numberAcross}
              isInvalid={!!this.props.errors.numberAcross}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Size ac
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="sizeAcross"
              onChange={this.props.handleChange}
              value={this.props.values.sizeAcross}
              isInvalid={!!this.props.errors.sizeAcross}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                No. ar
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="numberAround"
              onChange={this.props.handleChange}
              value={this.props.values.numberAround}
              isInvalid={!!this.props.errors.numberAround}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Size ar
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="sizeAround"
              onChange={this.props.handleChange}
              value={this.props.values.sizeAround}
              isInvalid={!!this.props.errors.sizeAround}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Eng/Cav*:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="engCav"
              onChange={this.props.handleChange}
              value={this.props.values.engCav}
              isInvalid={!!this.props.errors.engCav}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Tot Eng Amt
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="totEngAmt"
              onChange={this.props.handleChange}
              value={this.props.values.totEngAmt}
              isInvalid={!!this.props.errors.totEngAmt}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Perf:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="perf"
              onChange={this.props.handleChange}
              value={this.props.values.perf}
              isInvalid={!!this.props.errors.perf}
            >
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
            <Form.Control
              aria-label="default"
              name="siNumber"
              onChange={this.props.handleChange}
              value={this.props.values.siNumber}
              isInvalid={!!this.props.errors.siNumber}
            />
          </InputGroup>
        </Form.Row>
      </div>
    );
  }
}

export default Section3;
