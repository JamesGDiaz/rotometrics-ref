import React, { Component } from "react";
import { Form, InputGroup, Col } from "react-bootstrap";

class Section5 extends Component {
  render() {
    return (
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
                No. of corners:
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
        <div className="mb-3">
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
            label="Tight Tolerance"
            type={"checkbox"}
            id="sec-5-tight-tolerance"
            name="tightTol"
            onChange={this.props.handleChange}
            value={this.props.values.tightTol}
            isInvalid={!!this.props.errors.tightTol}
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
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Inspection Clearance #1:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="inpsectionClearance1"
              onChange={this.props.handleChange}
              value={this.props.values.inpsectionClearance1}
              isInvalid={!!this.props.errors.inpsectionClearance1}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Inspection Clearance #2:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="inpsectionClearance2"
              onChange={this.props.handleChange}
              value={this.props.values.inpsectionClearance2}
              isInvalid={!!this.props.errors.inpsectionClearance2}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Vacuum tool info:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="vacuumToolInfo"
              onChange={this.props.handleChange}
              value={this.props.values.vacuumToolInfo}
              isInvalid={!!this.props.errors.vacuumToolInfo}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Punches in tool:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="punchesInTool"
              onChange={this.props.handleChange}
              value={this.props.values.punchesInTool}
              isInvalid={!!this.props.errors.punchesInTool}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Punches loose:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="punchesLoose"
              onChange={this.props.handleChange}
              value={this.props.values.punchesLoose}
              isInvalid={!!this.props.errors.punchesLoose}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                # of cases:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="numberOfCases"
              onChange={this.props.handleChange}
              value={this.props.values.numberOfCases}
              isInvalid={!!this.props.errors.numberOfCases}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Box Type:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="boxType"
              onChange={this.props.handleChange}
              value={this.props.values.boxType}
            >
              <option>#16</option>
              <option>#17</option>
            </Form.Control>
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Misc. Box:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="miscBox"
              onChange={this.props.handleChange}
              value={this.props.values.miscBox}
              isInvalid={!!this.props.errors.miscBox}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Crate Received in:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="boxType"
              onChange={this.props.handleChange}
              value={this.props.values.boxType}
            >
              <option>Good state</option>
              <option>Damaged</option>
            </Form.Control>
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Crate number:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="crateNumber"
              onChange={this.props.handleChange}
              value={this.props.values.crateNumber}
              isInvalid={!!this.props.errors.crateNumber}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <Form.Label>Cost:</Form.Label>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Weld Cost:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="weldCost"
              onChange={this.props.handleChange}
              value={this.props.values.weldCost}
              isInvalid={!!this.props.errors.weldCost}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Finishing Cost:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="Cost"
              onChange={this.props.handleChange}
              value={this.props.values.finishingCost}
              isInvalid={!!this.props.errors.finishinCost}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                (Subtotal):
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="subTotalCost"
              onChange={this.props.handleChange}
              value={this.props.values.subTotalCost}
              isInvalid={!!this.props.errors.subTotalCost}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                MultiLevel Cost:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="multiLevelCost"
              onChange={this.props.handleChange}
              value={this.props.values.multiLevelCost}
              isInvalid={!!this.props.errors.multiLevelCost}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                NSC:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="nscCost"
              onChange={this.props.handleChange}
              value={this.props.values.nscCost}
              isInvalid={!!this.props.errors.nscCost}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Chrome:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="chromeCost"
              onChange={this.props.handleChange}
              value={this.props.values.chromeCost}
              isInvalid={!!this.props.errors.chromeCost}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Corners:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="Cost"
              onChange={this.props.handleChange}
              value={this.props.values.cornersCost}
              isInvalid={!!this.props.errors.cornersCost}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Other:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="otherCost"
              onChange={this.props.handleChange}
              value={this.props.values.otherCost}
              isInvalid={!!this.props.errors.otherCost}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Total:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="totalCost"
              onChange={this.props.handleChange}
              value={this.props.values.totalCost}
              isInvalid={!!this.props.errors.totalCost}
            />
          </InputGroup>
        </Form.Row>
      </div>
    );
  }
}

export default Section5;
