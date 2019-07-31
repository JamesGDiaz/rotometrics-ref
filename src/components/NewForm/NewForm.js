import React, { Component } from "react";
import { Accordion, Card, Button, Form, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faHandPointRight,
  faInfoCircle,
  faCircleNotch,
  faTools,
  faPlusSquare,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import { Formik } from "formik";
import newFormSchema from "./NewFormSchema";
import "./NewForm.css";

class NewForm extends Component {
  constructor() {
    super();
    this.state = {
      today: `${new Date().getMonth() +
        1}/${new Date().getDate()}/${new Date().getFullYear()}`
    };
    console.log(this.state.today);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="NewForm">
        <Formik
          validationSchema={newFormSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log("Submitting");
            console.log(values);
          }}
          initialValues={{
            dateReceived: this.state.today
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Button
                className="Button"
                type="submit"
                variant="outline-primary"
                size="lg"
                disabled={isSubmitting}
              >
                {!isSubmitting ? (
                  <div>
                    Create File <FontAwesomeIcon icon={faHandPointRight} />
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
              </Button>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <FontAwesomeIcon icon={faInfoCircle} /> Order Data
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Section1
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        isValid={isValid}
                        errors={errors}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <FontAwesomeIcon icon={faDotCircle} /> Die Characteristics
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Section2
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        isValid={isValid}
                        errors={errors}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <FontAwesomeIcon icon={faCircleNotch} /> Cavities' Data
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Section3
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        isValid={isValid}
                        errors={errors}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <FontAwesomeIcon icon={faTools} /> Repair Type
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <Section4
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        isValid={isValid}
                        errors={errors}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="4">
                    <FontAwesomeIcon icon={faTools} /> Repair Type #2
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Section5
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        isValid={isValid}
                        errors={errors}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="5">
                    <FontAwesomeIcon icon={faPlusSquare} /> Additional Info
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      <Section6
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        touched={touched}
                        isValid={isValid}
                        errors={errors}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Button
                className="Button"
                type="submit"
                variant="outline-primary"
                size="lg"
                disabled={isSubmitting}
              >
                {!isSubmitting ? (
                  <div>
                    Create File <FontAwesomeIcon icon={faHandPointRight} />
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default NewForm;
