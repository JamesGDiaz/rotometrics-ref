import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
class Section6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChange: props.handleChange,
      values: props.values,
      isValid: props.isValid,
      errors: props.errors,
      touch: props.touch
    };
  }
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
            onChange={this.state.handleChange}
            value={this.state.values.sparePartsToBeReturned}
            isInvalid={!!this.state.errors.sparePartsToBeReturned}
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
            onChange={this.state.handleChange}
            value={this.state.values.remarks}
            isInvalid={!!this.state.errors.remarks}
          />
        </InputGroup>
      </div>
    );
  }
}

export default Section6;
