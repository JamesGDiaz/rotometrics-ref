import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { InputGroup, Col } from "react-bootstrap";

class Section4 extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1
        }}
      >
        <div style={{ alignItems: "center" }}>
          <Form.Row>
            <Form.Check
              custom
              inline
              label="Normal Wear"
              type={"checkbox"}
              name="normalWear"
              id="normal-wear"
              onChange={this.props.handleChange}
              value={this.props.values.normalWear}
              isInvalid={!!this.props.errors.normalWear}
            />
            <Form.Check
              custom
              inline
              label="Nicked"
              type={"checkbox"}
              name="nicked"
              id="nicked"
              onChange={this.props.handleChange}
              value={this.props.values.nicked}
              isInvalid={!!this.props.errors.nicked}
            />
            <Form.Check
              custom
              inline
              label="Beat Down"
              type={"checkbox"}
              name="beatDown"
              id="beat-down"
              onChange={this.props.handleChange}
              value={this.props.values.beatDown}
              isInvalid={!!this.props.errors.beatDown}
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
              onChange={this.props.handleChange}
              value={this.props.values.journalRev}
              isInvalid={!!this.props.errors.journalRev}
            />
            <Form.Check
              custom
              inline
              label="Journal Repl"
              type={"checkbox"}
              name="journalRepl"
              id="journal-repl"
              onChange={this.props.handleChange}
              value={this.props.values.journalRepl}
              isInvalid={!!this.props.errors.journalRepl}
            />
            <Form.Check
              custom
              inline
              label="Drill Shaft/Vac. Die"
              type={"checkbox"}
              name="drillShaft"
              id="drill-shaft"
              onChange={this.props.handleChange}
              value={this.props.values.drillShaft}
              isInvalid={!!this.props.errors.drillShaft}
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
              onChange={this.props.handleChange}
              value={this.props.values.chipped}
              isInvalid={!!this.props.errors.chipped}
            />
            <Form.Check
              custom
              inline
              label="Abbrasive Wear"
              type={"checkbox"}
              name="abbrasiveWear"
              id="abbrasive-wear"
              onChange={this.props.handleChange}
              value={this.props.values.abbrasiveWear}
              isInvalid={!!this.props.errors.abbrasiveWear}
            />
            <Form.Check
              custom
              inline
              label="Overall Blade Impact"
              type={"checkbox"}
              name="overallBladeImpact"
              id="overall-blade-impact"
              onChange={this.props.handleChange}
              value={this.props.values.overallBladeImpact}
              isInvalid={!!this.props.errors.overallBladeImpact}
            />
          </Form.Row>
          <br />
          <Form.Row>
            {/*<Form.Check
              custom
              inline
              label="Welds Required"
              type={"checkbox"}
              name="weldsRequired"
              id="welds-required"
              onChange={this.props.handleChange}
              value={this.props.values.weldsRequired}
              isInvalid={!!this.props.errors.weldsRequired}
            />
            <Form.Control
              disabled
              placeholder={"Qty"}
              name={"weldsRequiredAmount"}
              onChange={this.props.handleChange}
              value={this.props.values.weldsRequiredAmount}
              isInvalid={!!this.props.errors.weldsRequiredAmount}
            />*/}
            <InputGroup as={Col} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox
                  label="Welds Required"
                  name="weldsRequired"
                  id="welds-required"
                  onChange={this.props.handleChange}
                  value={this.props.values.weldsRequired}
                />
              </InputGroup.Prepend>
              <Form.Control
                aria-label="Amount of welds required"
                placeholder={"Welds required "}
                name={"weldsRequiredAmount"}
                onChange={this.props.handleChange}
                value={this.props.values.weldsRequiredAmount}
                isInvalid={!!this.props.errors.weldsRequiredAmount}
              />
            </InputGroup>
          </Form.Row>
        </div>
      </div>
    );
  }
}

export default Section4;
