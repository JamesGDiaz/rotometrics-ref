import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  /*ReactPDF,*/ Page,
  Text,
  View,
  Document,
  StyleSheet,
  //PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    flexGrow: 1
  }
});

//Document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        {/*<Text>{arg1}</Text>*/}
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        {/*<Text>{arg2}</Text>*/}
      </View>
    </Page>
  </Document>
);

export class PrintPDF extends Component {
  constructor(props) {
    super(props);
    this.state = { formString: props.param };
  }

  decodeFormString = formString => {};
  componentDidMount() {
    //ReactPDF.render(<MyDocument />, `${__dirname}/test.pdf`);
  }

  render() {
    //const MyDocument = ProtoDocument("Franco", "Giordani");
    return (
      <div style={{ flex: 1 }}>
        <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading doc..."
            ) : (
              <Button variant="outline-primary">
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
