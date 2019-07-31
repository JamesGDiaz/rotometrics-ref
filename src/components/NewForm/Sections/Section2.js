import React from "react";
import { Form, FormControl, InputGroup, Col } from "react-bootstrap";

const Section2 = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Customer Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="P.O." />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Prev. repair order" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Demand Class:</Form.Label>
          <Form.Control as="select">
            <option>Standard</option>
            <option>Red Tag</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Die Type:</Form.Label>
          <Form.Control as="select">
            <option>Rotometrics</option>
            <option>NRT</option>
            <option>Varitool</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Serial No." />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Cust. Special Mark" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="Gear Bore*" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control placeholder="# of teeth*" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Replace Gear</Form.Label>
          <Form.Control as="select">
            <option>Primary</option>
            <option>Secondary</option>
            <option>None</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Gears returned</Form.Label>
          <Form.Control as="select">
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
          <FormControl placeholder="8c20" />
          <FormControl placeholder="32dp" />
          <FormControl />
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
          />
        </InputGroup>
      </Form.Row>
    </Form>
  );
};

export default Section2;
