import React from "react";
import { Form, InputGroup, Col } from "react-bootstrap";

const Section3 = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Cavity Type:</Form.Label>
          <Form.Control as="select">
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
          <Form.Control as="select">
            <option>n/a</option>
            <option>Simple</option>
            <option>Moderate</option>
            <option>Grid</option>
            <option>Complex</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="No. ac" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Size ac" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="No. ar" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Size ar" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Eng/Cav*:" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Tot Eng Amt" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <InputGroup as={Col} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Perf:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" aria-label="default">
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </InputGroup>
        <InputGroup as={Col} className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              SI #:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control aria-label="default" />
        </InputGroup>
      </Form.Row>
    </Form>
  );
};

export default Section3;
