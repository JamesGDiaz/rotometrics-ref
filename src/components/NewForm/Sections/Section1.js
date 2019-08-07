import React, { Component } from "react";
import { Form, FormControl, InputGroup, Col } from "react-bootstrap";
class Section1 extends Component {
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Quote Number:
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
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Received By:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="receivedBy"
            onChange={this.props.handleChange}
            value={this.props.values.receivedBy}
            isInvalid={!!this.props.errors.receivedBy}
          />
        </InputGroup>
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
        <InputGroup className="mb-3">
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

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Die Manufactured By:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="manufacturedBy"
            onChange={this.props.handleChange}
            value={this.props.values.manufacturedBy}
            isInvalid={!!this.props.errors.manufacturedBy}
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
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Text>Ship Date</InputGroup.Text>
            <FormControl
              name="shipDate"
              onChange={this.props.handleChange}
              value={this.props.values.shipDate}
              isInvalid={!!this.props.errors.shipDate}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Ship Method</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="shipMethod"
              onChange={this.props.handleChange}
              value={this.props.values.shipMethod}
              isInvalid={!!this.props.errors.shipMethod}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Demand Class:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="demandClass"
              onChange={this.props.handleChange}
              value={this.props.values.demandClass}
            >
              <option>Standard</option>
              <option>Priority</option>
              <option>Red Tag</option>
            </Form.Control>
          </InputGroup>
        </Form.Row>

        <Form.Check
          custom
          name="complaint"
          label="Was there a complaint?"
          type={"checkbox"}
          onChange={this.props.handleChange}
          value={this.props.values.complaint}
          id={"sec1-complaint"}
        />
      </div>
    );
  }
}

export default Section1;
