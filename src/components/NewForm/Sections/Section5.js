import React, { Component } from "react";
import { FormControl, InputGroup, Col, Form } from "react-bootstrap";
class Section5 extends Component {
  render() {
    return (
      <div>
        <Form.Row>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Matl Layer 1:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="matlLayer1"
              onChange={this.props.handleChange}
              value={this.props.values.matlLayer1}
              isInvalid={!!this.props.errors.matlLayer1}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Matl Layer 2:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="matlLayer2"
              onChange={this.props.handleChange}
              value={this.props.values.matlLayer2}
              isInvalid={!!this.props.errors.matlLayer2}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Matl Layer 3:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="matlLayer3"
              onChange={this.props.handleChange}
              value={this.props.values.matlLayer3}
              isInvalid={!!this.props.errors.matlLayer3}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Matl Layer 4:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="matlLayer4"
              onChange={this.props.handleChange}
              value={this.props.values.matlLayer4}
              isInvalid={!!this.props.errors.matlLayer4}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Matl Layer 5:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="matlLayer5"
              onChange={this.props.handleChange}
              value={this.props.values.matlLayer5}
              isInvalid={!!this.props.errors.matlLayer5}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Matl Layer 6:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="matlLayer6"
              onChange={this.props.handleChange}
              value={this.props.values.matlLayer6}
              isInvalid={!!this.props.errors.matlLayer6}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Stock Source:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="stockSource"
              onChange={this.props.handleChange}
              value={this.props.values.stockSource}
            >
              <option>Rotometrics</option>
              <option>Substitute</option>
              <option>Received with order</option>
              <option>Prior Order</option>
              <option>In-House</option>
              <option>Undetermined</option>
            </Form.Control>
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                SI #:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="siNumber"
              onChange={this.props.handleChange}
              value={this.props.values.siNumber}
              isInvalid={!!this.props.errors.siNumber}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Treatment:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="treatment"
              onChange={this.props.handleChange}
              value={this.props.values.treatment}
            >
              <option>None</option>
              <option>CP1</option>
              <option>CP2</option>
              <option>CPS</option>
              <option>RD Plus</option>
              <option>YJ</option>
            </Form.Control>
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                No. of Perf sets to add:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="noOfPerfSetsToAdd"
              onChange={this.props.handleChange}
              value={this.props.values.noOfPerfSetsToAdd}
              isInvalid={!!this.props.errors.noOfPerfSetsToAdd}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Smallest #:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="smallestNo"
              onChange={this.props.handleChange}
              value={this.props.values.smallestNo}
              isInvalid={!!this.props.errors.smallestNo}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                *Clearance 1:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="clearance1"
              onChange={this.props.handleChange}
              value={this.props.values.clearance1}
              isInvalid={!!this.props.errors.clearance1}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                *Clearance 2:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="clearance2"
              onChange={this.props.handleChange}
              value={this.props.values.clearance2}
              isInvalid={!!this.props.errors.clearance2}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                *Clearance 3:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="clearance3"
              onChange={this.props.handleChange}
              value={this.props.values.clearance3}
              isInvalid={!!this.props.errors.clearance3}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                *Clearance 4:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="clearance4"
              onChange={this.props.handleChange}
              value={this.props.values.clearance4}
              isInvalid={!!this.props.errors.clearance4}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Impression:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="impression"
              onChange={this.props.handleChange}
              value={this.props.values.impression}
            >
              <option>Light</option>
              <option>Moderate</option>
              <option>Heavy</option>
              <option>None</option>
            </Form.Control>
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Wheel Material:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              aria-label="default"
              name="wheelMaterial"
              onChange={this.props.handleChange}
              value={this.props.values.wheelMaterial}
            >
              <option>RD80</option>
              <option>RD90</option>
              <option>RD100</option>
            </Form.Control>
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Qty Score Blade:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="qtyScoreBlade"
              onChange={this.props.handleChange}
              value={this.props.values.qtyScoreBlade}
              isInvalid={!!this.props.errors.qtyScoreBlade}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Qty Punch Wheels:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="default"
              name="qtyPunchWheels"
              onChange={this.props.handleChange}
              value={this.props.values.qtyPunchWheels}
              isInvalid={!!this.props.errors.qtyPunchWheels}
            />
          </InputGroup>
        </Form.Row>
      </div>
    );
  }
}

export default Section5;
