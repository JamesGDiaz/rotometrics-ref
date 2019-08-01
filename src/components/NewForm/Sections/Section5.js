import React, { Component } from "react";
import { Form, InputGroup, Col } from "react-bootstrap";

class Section5 extends Component {
  render() {
    return (
      <div>
        <div className="mb-3">
          <Form.Row>
            <InputGroup as={Col} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  GS Bearer Dia
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-label="default"
                name="gsBearerDia"
                onChange={this.props.handleChange}
                value={this.props.values.gsBearerDia}
                isInvalid={!!this.props.errors.gsBearerDia}
              />
            </InputGroup>
            <InputGroup as={Col} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Non GS Bearer Dia
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-label="default"
                name="nonGSBearerDia"
                onChange={this.props.handleChange}
                value={this.props.values.nonGSBearerDia}
                isInvalid={!!this.props.errors.nonGSBearerDia}
              />
            </InputGroup>
          </Form.Row>

          <Form.Row>
            <InputGroup as={Col} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Custom Samples
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="select"
                aria-label="default"
                name="customSamples"
                onChange={this.props.handleChange}
                value={this.props.values.customSamples}
                isInvalid={!!this.props.errors.customSamples}
              >
                <option>No</option>
                <option>Yes</option>
              </Form.Control>
            </InputGroup>
            <InputGroup as={Col} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  No. of corners
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-label="default"
                name="numberOfCorners"
                onChange={this.props.handleChange}
                value={this.props.values.numberOfCorners}
                isInvalid={!!this.props.errors.numberOfCorners}
              />
            </InputGroup>
          </Form.Row>
          <Form.Row>
            <InputGroup as={Col} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Grind Estimate
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-label="default"
                name="grindEstimate"
                onChange={this.props.handleChange}
                value={this.props.values.grindEstimate}
                isInvalid={!!this.props.errors.grindEstimate}
              />
            </InputGroup>
          </Form.Row>
          <Form.Check
            custom
            inline
            label="Silicone Cavities"
            type={"checkbox"}
            id="sec-5-silicone-cavities"
            name="siliconeCavities"
            onChange={this.props.handleChange}
            value={this.props.values.siliconeCavities}
            isInvalid={!!this.props.errors.siliconeCavities}
          />
          <Form.Check
            custom
            inline
            label="Pattern Change"
            type={"checkbox"}
            id="sec-5-pattern-change"
            name="patternChange"
            onChange={this.props.handleChange}
            value={this.props.values.patternChange}
            isInvalid={!!this.props.errors.patternChange}
          />
          <Form.Check
            custom
            inline
            label="Foam Cavities"
            type={"checkbox"}
            id="sec-5-foam-cavities"
            name="foamCavities"
            onChange={this.props.handleChange}
            value={this.props.values.foamCavities}
            isInvalid={!!this.props.errors.foamCavities}
          />
          <Form.Check
            custom
            inline
            label="Non-stick"
            type={"checkbox"}
            id="sec-5-non-stick"
            name="nonStick"
            onChange={this.props.handleChange}
            value={this.props.values.nonStick}
            isInvalid={!!this.props.errors.nonStick}
          />
          <Form.Check
            custom
            inline
            label="QC Sheet"
            type={"checkbox"}
            id="sec-5-qc-sheet"
            name="qcSheet"
            onChange={this.props.handleChange}
            value={this.props.values.qcSheet}
            isInvalid={!!this.props.errors.qcSheet}
          />
        </div>
      </div>
    );
  }
}

export default Section5;
