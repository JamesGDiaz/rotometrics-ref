import React, { Component } from "react";
import zlib from "zlib";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import QRCode from "qrcode.react";
import QRCode from "qrcode";
import { DocumentTemplate } from "./DocumentTemplate";

class PrintPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dirtyFormString: this.props.match.params.data,
      formObject: null
    };
  }

  decompressionDidFinish = result => {
    let formObject = JSON.parse(result.toString());
    formObject.quoteString = this.state.dirtyFormString;
    QRCode.toDataURL(
      this.state.dirtyFormString,
      {
        errorCorrectionLevel: "L"
      },
      (error, url) => {
        formObject.qrCodeData = url;
        this.setState({
          formObject: formObject,
          loading: false,
          qrCodeURL: url
        });
      }
    );

    console.log(this.state.formObject);
  };

  componentWillMount() {
    let formString = this.state.dirtyFormString
      .replace(/[-]/g, "+")
      .replace(/[_]/g, "/");
    zlib.gunzip(Buffer.from(formString, "base64"), (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Decompression succesful");
      this.decompressionDidFinish(result);
    });
  }

  render() {
    if (this.state.loading)
      return (
        <div style={{ flex: 0.5, padding: "3vmin" }}>
          <Spinner
            style={{ alignSelf: "center" }}
            variant="dark"
            animation="border"
          />
        </div>
      );
    else {
      let MyDocument = new DocumentTemplate(this.state.formObject);
      MyDocument.qrCodeData = this.state.qrCodeURL;

      let DownloadLink = () => {
        return (
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
        );
      };

      return (
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <DownloadLink />
          <PDFViewer
            style={{
              flex: 1,
              marginLeft: "3vmin",
              marginRight: "3vmin",
              marginTop: "3vmin",
              minHeight: "40vh",
              maxHeight: "70vh"
            }}
          >
            {MyDocument.makeDocument()}
          </PDFViewer>
          <p
            style={{
              marginBottom: "3vmin",
              marginLeft: "3vmin",
              fontSize: "12px",
              fontStyle: "italic",
              textAlign: "start"
            }}
          >
            This preview might not reflect exactly how the actual document will
            look like.
          </p>
          <DownloadLink />
          <div style={{ flexDirection: "row", marginTop: "12px" }}>
            <div style={{ flex: 0.5 }}>
              <p>
                You can recover this quote with this QRCode. Just scan it, and
                enter the decoded data on this page:
                <br />
                <b>
                  {`${window.location.protocol}//${
                    window.location.host
                  }/print/`}
                  <i>{this.state.dirtyFormString.substring(0, 10)}...</i>
                </b>
              </p>
            </div>
            <div>
              <img src={this.state.qrCodeURL} alt={"QR Code"} />
              <p
                style={{
                  marginLeft: "10vw",
                  marginRight: "10vw",
                  marginTop: "1vh",
                  marginBottom: "1vh",
                  fontSize: "9pt",
                  fontStyle: "italic",
                  fontWeight: 250,
                  wordWrap: "break-word"
                }}
              >
                {this.state.dirtyFormString}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PrintPDF;
