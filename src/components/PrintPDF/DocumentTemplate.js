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
        <Page size="A4" style={Styles.page} orientation="landscape">
          <View
            style={[
              Styles.section,
              { flexDirection: "column", borderBottom: "2px solid" }
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Image src={require("../../assets/rotometrics-logo.png")} />
              <Title>REPAIR EVALUATION FORM</Title>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "#000000",
                borderBottomWidth: "2px"
              }}
            >
              <StrongText>Inspected By: </StrongText>
              <Text style={Styles.text}>{this.props.inspectedBy}</Text>
              <StrongText>Quote No.: </StrongText>
              <Text style={Styles.text}>{this.props.quoteNumber}</Text>
              <StrongText>Date Received: </StrongText>
              <Text style={Styles.text}>{this.props.dateReceived}</Text>
              <StrongText>Complaint: </StrongText>
              <Text style={Styles.text}>
                {this.props.complaint ? "YES" : "NO"}
              </Text>
            </View>
          </View>
          <View style={Styles.section}>
            <Text style={{ fontSize: "9pt", fontWeight: "200" }}>
              {this.quotestring}
            </Text>
          </View>
        </Page>
      </Document>
    );
  }
}

//Styles
export const Styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  section: {
    margin: 10,
    flexGrow: 1
  },
  text: {
    fontSize: "10pt"
  }
});

//Styled Components
export const StrongText = styled.Text`
  font-size: 10pt;
  font-family: "Helvetica";
  font-weight: 18000;
`;

export const Title = styled.Text`
  font-size: "16pt";
  font-family: "Helvetica";
  font-weight: 700;
`;
