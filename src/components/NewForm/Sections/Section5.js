import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const Section5 = () => {
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
    </Form>
  );
};

export default Section5;
