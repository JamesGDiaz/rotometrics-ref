import React, { Component } from "react";
import { Form, FormControl, InputGroup, Col } from "react-bootstrap";
class Section1 extends Component {
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
            onChange={this.props.handleChange}
            value={this.props.values.inspectedBy}
            isInvalid={!!this.props.errors.inspectedBy}
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
              onChange={this.props.handleChange}
              value={this.props.values.quoteNumber}
              isInvalid={!!this.props.errors.quoteNumber}
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
              onChange={this.props.handleChange}
              value={this.props.values.dateReceived}
              isInvalid={!!this.props.errors.dateReceived}
            />
          </InputGroup>
        </Form.Row>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Customer Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            name="customerName"
            onChange={this.props.handleChange}
            value={this.props.values.customerName}
            isInvalid={!!this.props.errors.customerName}
          />
        </InputGroup>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>P.O.</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="po"
              onChange={this.props.handleChange}
              value={this.props.values.po}
              isInvalid={!!this.props.errors.po}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Prev. repair order</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="prevRepairOrder"
              onChange={this.props.handleChange}
              value={this.props.values.prevRepairOrder}
              isInvalid={!!this.props.errors.prevRepairOrder}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <Form.Check
            custom
            name="complaint"
            label="Was there a complaint?"
            type={"checkbox"}
            onChange={this.props.handleChange}
            value={this.props.values.complaint}
            id={"sec1-complaint"}
          />
        </Form.Row>
      </div>
    );
  }
}

export default Section1;
