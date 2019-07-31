import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import DatePicker from "react-date-picker";
const Section1 = () => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Inspected By:
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Quote #
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Date Received</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Was there a complaint?" />
        </InputGroup.Prepend>
        <FormControl
          placeholder="Was there a complaint?"
          disabled
          aria-label="Was there a complaint?"
        />
      </InputGroup>
    </Form>
  );
};

export default Section1;
