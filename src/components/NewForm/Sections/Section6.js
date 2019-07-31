import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const Section6 = () => {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Spare Parts to be Returned
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          rows="3"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
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
        />
      </InputGroup>
    </Form>
  );
};

export default Section6;
