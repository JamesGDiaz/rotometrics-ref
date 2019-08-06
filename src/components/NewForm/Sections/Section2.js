import React, { Component } from "react";
import { Form, FormControl, InputGroup, Col } from "react-bootstrap";
import { Field } from "formik";

class Section2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChange: props.handleChange,
      values: props.values,
      isValid: props.isValid,
      errors: props.errors,
      touch: props.touch,
      today: `${new Date().getMonth() +
        1}/${new Date().getDate()}/${new Date().getFullYear()}`,
      hubDiameter: "",
      numberOfTeeth: ""
    };
  }

  render() {
    return (
      <div>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Demand Class:</Form.Label>
            <Form.Control
              as="select"
              name="demandClass"
              onChange={this.props.handleChange}
              value={this.props.values.demandClass}
              isInvalid={!!this.props.errors.demandClass}
            >
              <option>Standard</option>
              <option>Red Tag</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Die Type:</Form.Label>
            <Form.Control
              as="select"
              name="dieType"
              onChange={this.props.handleChange}
              value={this.props.values.dieType}
              isInvalid={!!this.props.errors.dieType}
            >
              <option>Rotometrics</option>
              <option>NRT</option>
              <option>Varitool</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              placeholder="Serial No."
              name="serialNumber"
              onChange={this.props.handleChange}
              value={this.props.values.serialNumber}
              isInvalid={!!this.props.errors.serialNumber}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              placeholder="Cust. Special Mark"
              name="customSpecialMark"
              onChange={this.props.handleChange}
              value={this.props.values.customSpecialMark}
              isInvalid={!!this.props.errors.customSpecialMark}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Field
              name="numberOfTeeth"
              render={({ field, form }) => (
                <Form.Control
                  {...field}
                  placeholder="# of teeth*"
                  onChange={e => {
                    const hubDia = parseInt(e.target.value) / 8;
                    this.props.handleChange(e);
                    form.setFieldValue("hubDiameter", `${hubDia.toFixed(3)}"`);
                  }}
                />
              )}
              onChange={this.props.handleChange}
              onBlur={this.props.handleblur}
              value={this.props.values.numberOfTeeth}
              isInvalid={!!this.props.errors.numberOfTeeth}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Replace Gear</Form.Label>
            <Form.Control
              as="select"
              name="replaceGear"
              onChange={this.props.handleChange}
              value={this.props.values.replaceGear}
              isInvalid={!!this.props.errors.replaceGear}
            >
              <option>None</option>
              <option>Primary</option>
              <option>Secondary</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Gears returned</Form.Label>
            <Form.Control
              as="select"
              name="gearsReturned"
              onChange={this.props.handleChange}
              value={this.props.values.gearsReturned}
              isInvalid={!!this.props.errors.gearsReturned}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>PPA</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="8c20"
              name="ppa1"
              onChange={this.props.handleChange}
              value={this.props.values.ppa1}
              isInvalid={!!this.props.errors.ppa1}
            />
            <FormControl
              placeholder="32dp"
              name="ppa2"
              onChange={this.props.handleChange}
              value={this.props.values.ppa2}
              isInvalid={!!this.props.errors.ppa2}
            />
            <FormControl
              name="ppa3"
              onChange={this.props.handleChange}
              value={this.props.values.ppa3}
              isInvalid={!!this.props.errors.ppa3}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Face:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="face"
              onChange={this.props.handleChange}
              value={this.props.values.face}
              isInvalid={!!this.props.errors.face}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Gear Bore*:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="gearBore"
              onChange={this.props.handleChange}
              value={this.props.values.gearBore}
              isInvalid={!!this.props.errors.gearBore}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Gear DWG:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="gearDWG"
              onChange={this.props.handleChange}
              value={this.props.values.gearDWG}
              isInvalid={!!this.props.errors.gearDWG}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Hub Diameter:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="hubDiameter"
              onChange={this.props.handleChange}
              value={this.props.values.hubDiameter}
              isInvalid={!!this.props.errors.hubDiameter}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Inside Bearer Length:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="insideBearerLength"
              onChange={this.props.handleChange}
              value={this.props.values.insideBearerLength}
              isInvalid={!!this.props.errors.insideBearerLength}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Overall Width*:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="overallWidth"
              onChange={this.props.handleChange}
              value={this.props.values.overallWidth}
              isInvalid={!!this.props.errors.overallWidth}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Weigth:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="weigth"
              onChange={this.props.handleChange}
              value={this.props.values.weigth}
              isInvalid={!!this.props.errors.weigth}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Overall Length:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="overallLength"
              onChange={this.props.handleChange}
              value={this.props.values.overallLength}
              isInvalid={!!this.props.errors.overallLength}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Body Length:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="bodyLength"
              onChange={this.props.handleChange}
              value={this.props.values.bodyLength}
              isInvalid={!!this.props.errors.bodyLength}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Bearer Width:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="bearerWidth"
              onChange={this.props.handleChange}
              value={this.props.values.bearerWidth}
              isInvalid={!!this.props.errors.bearerWidth}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Original Job/ Order #:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="originalJob"
              onChange={this.props.handleChange}
              value={this.props.values.originalJob}
              isInvalid={!!this.props.errors.originalJob}
            />
          </InputGroup>
          <InputGroup as={Col} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                P.D.*:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="pd"
              onChange={this.props.handleChange}
              value={this.props.values.pd}
              isInvalid={!!this.props.errors.pd}
            />
          </InputGroup>
        </Form.Row>
        <Form.Row>
          <Form.Check
            custom
            inline
            label="No gear received"
            type={"checkbox"}
            name="noGearReceived"
            id="no-gear-received"
            onChange={this.props.handleChange}
            value={this.props.values.noGearReceived}
            isInvalid={!!this.props.errors.noGearReceived}
          />
        </Form.Row>
      </div>
    );
  }
}

export default Section2;
