import React, { Component } from "react";
import { Form, FormControl, InputGroup, Col } from "react-bootstrap";
class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChange: props.handleChange,
      values: props.values,
      isValid: props.isValid,
      errors: props.errors,
      touch: props.touch
    };
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Inspected By:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="inspectedBy"
            onChange={this.state.handleChange}
            value={this.state.values.inspectedBy}
          />
        </InputGroup>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Quote #
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="quoteNumber"
              onChange={this.state.handleChange}
              value={this.state.values.quoteNumber}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Date Received</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="dateReceived"
              onChange={this.state.handleChange}
              value={this.state.values.dateReceived}
            />
          </InputGroup>
        </Form.Row>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Customer Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name="customerName"
            onChange={this.state.handleChange}
            value={this.state.values.customerName}
          />
        </InputGroup>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>P.O.</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="po"
              onChange={this.state.handleChange}
              value={this.state.values.po}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Prev. repair order</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="prevRepairOrder"
              onChange={this.state.handleChange}
              value={this.state.values.prevRepairOrder}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-1">
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                aria-label="Was there a complaint?"
                name="complaint"
                onChange={this.state.handleChange}
                value={this.state.values.complaint}
              />
            </InputGroup.Prepend>
            <FormControl
              placeholder="Was there a complaint?"
              disabled
              aria-label="Was there a complaint?"
            />
          </InputGroup>
        </Form.Row>
      </div>
    );
  }
}

export default Section1;
