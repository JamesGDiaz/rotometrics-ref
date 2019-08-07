import React, { Component } from "react";
import { FormControl, InputGroup, Form, Col } from "react-bootstrap";
class Section7 extends Component {
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Spare Parts
              <br /> to be Returned
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            rows="3"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="sparePartsToBeReturned"
            onChange={this.props.handleChange}
            value={this.props.values.sparePartsToBeReturned}
            isInvalid={!!this.props.errors.sparePartsToBeReturned}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Misc. Product Description and Comments:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            rows="5"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="miscProductDescript"
            onChange={this.props.handleChange}
            value={this.props.values.miscProductDescript}
            isInvalid={!!this.props.errors.miscProductDescript}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Remarks
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            rows="5"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="remarks"
            onChange={this.props.handleChange}
            value={this.props.values.remarks}
            isInvalid={!!this.props.errors.remarks}
          />
        </InputGroup>
        <InputGroup as={Col} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Tax:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as="select"
            aria-label="default"
            name="tax"
            onChange={this.props.handleChange}
            value={this.props.values.tax}
            isInvalid={!!this.props.errors.tax}
          >
            <option>No</option>
            <option>Yes</option>
          </Form.Control>
        </InputGroup>
      </div>
    );
  }
}

export default Section7;
