import React from "react";
import { Form } from "react-bootstrap";

const Section4 = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1
      }}
    >
      <Form>
        <Form.Row>
          <Form.Check inline label="Normal Wear" type={"checkbox"} />
          <Form.Check inline label="Nicked" type={"checkbox"} />
          <Form.Check inline label="Beat Down" type={"checkbox"} />
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Check inline label="Journal Rev" type={"checkbox"} />
          <Form.Check inline label="Journal Repl" type={"checkbox"} />
          <Form.Check inline label="Welds Req'd" type={"checkbox"} />
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Check label="Chipped" type={"checkbox"} />
          <Form.Check label="Abbrasive Wear" type={"checkbox"} />
          <Form.Check label="Overall Blade Impact" type={"checkbox"} />
        </Form.Row>
      </Form>
    </div>
  );
};

export default Section4;
