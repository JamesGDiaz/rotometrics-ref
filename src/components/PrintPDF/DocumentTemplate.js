import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet
} from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

//Document
export class DocumentTemplate {
  props = {
    author: "",
    fileName: "",
    quoteString: "",
    inspectedBy: "",
    quoteNumber: "",
    dateReceived: "",
    complaint: false
  };

  constructor(author, filename) {
    this.author = author;
    this.fileName = filename;
  }

  makeDocument() {
    return (
      <Document
        author={this.author}
        title={`${this.props.quoteNumber}-rotometrics`}
        creator={this.props.inspectedBy}
      >
        <Page size="A4" style={styles.page} orientation="landscape">
          <View
            style={[styles.section, { flex: 0.1, flexDirection: "column" }]}
            debug={true}
          >
            <View style={[styles.section, { flexDirection: "row" }]}>
              <Image
                src={require("../../assets/rotometrics-logo.png")}
                style={{ width: 198, height: 40, marginRight: "30vw" }}
              />
              <Text style={styles.title}>REPAIR EVALUATION FORM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "#000000",
                borderBottomWidth: "2px"
              }}
            >
              <Text style={styles.strongText}>Inspected By: </Text>
              <Text style={styles.text}>{this.props.inspectedBy}</Text>
              <Text style={styles.strongText}>Quote No.: </Text>
              <Text style={styles.text}>{this.props.quoteNumber}</Text>
              <Text style={styles.strongText}>Date Received: </Text>
              <Text style={styles.text}>{this.props.dateReceived}</Text>
              <Text style={styles.strongText}>Complaint: </Text>
              <Text style={styles.text}>
                {this.props.complaint ? "YES" : "NO"}
              </Text>
            </View>
          </View>
          <View style={styles.section} debug={true}>
            <Text style={{ fontSize: "9pt", fontWeight: "200" }}>
              {this.props.quoteString}
            </Text>
          </View>
        </Page>
      </Document>
    );
  }
}

//styles
export const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 2,
    flex: 1
  },
  text: {
    fontSize: "10pt",
    marginRight: "8pt"
  },

  //Styled Components
  strongText: {
    fontSize: "10pt",
    fontFamily: "Helvetica",
    fontWeight: 700
  },

  title: {
    fontSize: "24pt",
    fontFamily: "Helvetica",
    fontWeight: 700,
    textAlign: "left"
  }
});
