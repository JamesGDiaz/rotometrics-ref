import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Section4 extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1
        }}
      >
        <div>
          <Form.Row>
            <Form.Check
              custom
              inline
              label="Normal Wear"
              type={"checkbox"}
              name="normalWear"
              id="normal-wear"
            />
            <Form.Check
              custom
              inline
              label="Nicked"
              type={"checkbox"}
              name="nicked"
              id="nicked"
            />
            <Form.Check
              custom
              inline
              label="Beat Down"
              type={"checkbox"}
              name="beatDown"
              id="beat-down"
            />
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Check
              custom
              inline
              label="Journal Rev"
              type={"checkbox"}
              name="journalRev"
              id="journal-rev"
            />
            <Form.Check
              custom
              inline
              label="Journal Repl"
              type={"checkbox"}
              name="journalRepl"
              id="journal-repl"
            />
            <Form.Check
              custom
              inline
              label="Welds Required"
              type={"checkbox"}
              name="weldsRequired"
              id="welds-required"
            />
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Check
              custom
              inline
              label="Chipped"
              type={"checkbox"}
              name="chipped"
              id="chipped"
            />
            <Form.Check
              custom
              inline
              label="Abbrasive Wear"
              type={"checkbox"}
              name="abbrasiveWear"
              id="abbrasive-wear"
            />
            <Form.Check
              custom
              inline
              label="Overall Blade Impact"
              type={"checkbox"}
              name="overallBladeImpact"
              id="overall-blade-impact"
            />
          </Form.Row>
        </div>
      </div>
    );
  }
}

export default Section4;
