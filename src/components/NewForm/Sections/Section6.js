import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
class Section6 extends Component {
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
      </div>
    );
  }
}

export default Section6;
