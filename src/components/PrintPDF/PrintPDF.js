import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "qrcode.react";
import { DocumentTemplate } from "./DocumentTemplate";

class PrintPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formString: this.props.match.params.data,
      formObject: JSON.parse(atob(this.props.match.params.data))
    };
  }
  componentWillMount() {
    console.log(`base64 String: ${this.state.formString}\n\n`);
    console.log(this.state.formObject);
  }

  render() {
    const MyDocument = new DocumentTemplate(
      this.state.formObject.inspectedBy,
      `${this.state.formObject.quoteNumber}-repair_order`
    );
    MyDocument.props = this.state.formObject;
    return (
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <PDFDownloadLink
          document={MyDocument.makeDocument()}
          fileName={`${MyDocument.fileName}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading doc..."
            ) : (
              <Button variant="outline-success" size="lg">
                <FontAwesomeIcon icon={faFileDownload} /> Download
              </Button>
            )
          }
        </PDFDownloadLink>
        <PDFViewer style={{ flex: 1, margin: "3vmin" }}>
          {MyDocument.makeDocument()}
        </PDFViewer>
        <div style={{ flexDirection: "row" }}>
          <div style={{ flex: 0.5 }}>
            <p>
              With this QRCode you can recover this quote. Just scan it, and
              enter the decoded data on this page:
              <br />
              <b>
                {`${window.location.protocol}//${window.location.host}/print/`}
                <i>decoded data</i>
              </b>
            </p>
          </div>
          <QRCode
            value={this.state.formString}
            level={"L"}
            size={200}
            includeMargin={true}
          />
          <p
            style={{
              marginLeft: "10vw",
              marginRight: "10vw",
              marginTop: "1vh",
              marginBottom: "1vh",
              fontSize: "9pt",
              fontWeight: 200,
              wordWrap: "break-word"
            }}
          >
            {this.state.formString}
          </p>
        </div>
      </div>
    );
  }
}

export default PrintPDF;
