import React, { Component } from "react";
import zlib from "zlib";
import { Accordion, Card, Button, Form, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faHandPointRight,
  faInfoCircle,
  faCircleNotch,
  faTools,
  faPlusSquare,
  faDotCircle,
  faScroll
} from "@fortawesome/free-solid-svg-icons";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import { Formik } from "formik";
import newFormSchema from "./NewFormSchema";
import "./NewForm.css";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import { fromSchemaToId } from "../../methods/SchemaToDict";

class NewForm extends Component {
  listErrors = errors => {
    if (Object.getOwnPropertyNames(errors).length > 0) {
      return Object.getOwnPropertyNames(errors).map((value, index) => {
        return (
          <ErrorAlert
            text={`${value
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, function(str) {
                return str.toUpperCase();
              })}
          , ${errors[value]}`}
            key={index}
          />
        );
      });
    }
  };

  render() {
    return (
      <div className="NewForm">
        <Formik
          validationSchema={newFormSchema}
          onChange
          onSubmit={(values, actions) => {
            let json = fromSchemaToId(JSON.stringify(values));
            console.log(json);
            zlib.gzip(json, (error, result) => {
              let compressedString = result
                .toString("base64")
                .replace(/[+]/g, "-")
                .replace(/[/]/g, "_");
              console.log("done");
              actions.setSubmitting(false);
              this.props.history.push(`print/${compressedString}`);
            });
          }}
          initialValues={{
            dateReceived: `${new Date().getMonth() +
              1}/${new Date().getDate()}/${new Date().getFullYear()}`,
            ppa1: "8c20",
            ppa2: "32dp",
            demandClass: "Standard",
            dieType: "Rotometrics",
            gearsReturned: 1,
            replaceGear: "None",
            gearCondition: "Mashed",
            cutType: "To Liner",
            position: "Topcutter",
            stockSource: "Rotometrics",
            treatment: "None",
            impression: "Light",
            wheelMaterial: "RD80",
            boxType: "#16",
            crateRecdIn: "Good State",
            tax: "No",
            cavityType: "RCR",
            specialCavityType: "n/a",
            labelAppl: "Manual",
            customSamples: "No"
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
                disabled={isSubmitting}
                size="lg"
              >
                {!isSubmitting ? (
                  <div>
                    Create File <FontAwesomeIcon icon={faHandPointRight} />{" "}
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                ) : (
                  <div>
                    Creating... <Spinner animation="border" variant="primary" />
                  </div>
                )}
              </Button>
              <div style={{ marginBottom: "16px" }}>
                {this.listErrors(errors)}
              </div>
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
                    <FontAwesomeIcon icon={faTools} /> Repair Data #1
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
                    <FontAwesomeIcon icon={faScroll} /> Material Data
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
                    <FontAwesomeIcon icon={faTools} /> Repair Data #2
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
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="6">
                    <FontAwesomeIcon icon={faPlusSquare} /> Additional Info
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      <Section7
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
                    Create File <FontAwesomeIcon icon={faHandPointRight} />{" "}
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                ) : (
                  <div>
                    Creating... <Spinner animation="border" variant="primary" />
                  </div>
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
