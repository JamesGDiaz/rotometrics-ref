import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  //PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "qrcode.react";

//Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    flexGrow: 1
  },
  text: {
    fontSize: "11pt"
  }
});

//Document
const MyDocument = quotestring => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      <View style={styles.section}>
        <Text>String:</Text>
        <Text>{quotestring}</Text>
      </View>
    </Page>
  </Document>
);

class PrintPDF extends Component {
  constructor(props) {
    super(props);
    this.state = { formString: this.props.match.params.data };
  }
  componentDidMount() {
    console.log(`base64 String: ${this.state.formString}\n\n`);
    const formJSON = atob(this.state.formString);
    const formObject = JSON.parse(formJSON);

    console.log(formObject);
  }

  render() {
    return (
      <div style={{ flex: 1, flexDirection: "column" }}>
        <QRCode
          value={this.state.formString}
          level={"L"}
          size={512}
          includeMargin={true}
        />
        <PDFDownloadLink
          document={MyDocument(this.state.formString)}
          fileName="test.pdf"
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
      </div>
    );
  }
}

export default PrintPDF;
