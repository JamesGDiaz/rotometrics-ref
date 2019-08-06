import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  Font
} from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

//Font.registerHyphenationCallback(word => [word]);

//Document
export class DocumentTemplate {
  props = {
    /**
     * Section 1 Order Data
     */
    author: "",
    fileName: "",
    quoteString: "",
    qrCodeData: "",
    inspectedBy: "",
    quoteNumber: "",
    dateReceived: "",
    complaint: false,
    customerName: "",
    po: "",
    prevRepairOrder: "",
    /**
     * Section 2
     * Die Characteristics
     */
    demandClass: "",
    dieType: "",
    serialNumber: "",
    customSpecialMark: "",
    numberOfTeeth: 0,
    replaceGear: "",
    gearsReturned: 1,
    ppa1: "",
    ppa2: "",
    ppa3: "",
    face: "",
    gearBore: "",
    gearDWG: "",
    hubDiameter: "",
    insideBearerLength: "",
    overallWidth: "",
    weight: "",
    overallLength: "",
    bodyLength: "",
    bearerWidth: "",
    originalJob: "",
    pd: "",

    /**
     * Section 3
     * Cavities Data
     */
    cavityType: "",
    specialCavityType: "",
    numberAcross: 0,
    sizeAcross: "",
    numberAround: 0,
    sizeAround: "",
    engCav: "",
    totEngAmt: 0,
    perf: "",
    siNumber: "",

    /**
     * Section 4
     * Repair Type
     */

    normalWear: false,
    nicked: false,
    beatDown: false,
    journalRev: false,
    journalRepl: false,
    weldsRequired: false,
    weldsRequiredAmount: false,
    chipped: false,
    abbrasiveWear: false,
    overallBladeImpact: false,

    /**
     * Section 5
     * Repair Type #2
     */
    gsBearerDia: "",
    nonGSBearerDia: "",
    customSamples: "",
    numberOfCorners: 0,
    grindEstimate: "",
    siliconeCavities: false,
    patternChange: false,
    foamCavities: false,
    nonStick: false,
    qcSheet: false,

    /**
     * Section 6
     * Additional Info
     */
    sparePartsToBeReturned: "",
    remarks: ""
  };

  constructor(props) {
    this.props = props;
    this.author = props.inspectedBy;
    this.fileName = `${props.quoteNumber}.pdf`;
  }

  makeDocument() {
    return (
      <Document
        author={this.author}
        title={`${this.props.quoteNumber}-rotometrics`}
        creator={this.props.inspectedBy}
      >
        <Page size="A4" style={styles.page} orientation="landscape">
          <Region
            style={{
              flexDirection: "column",
              height: "60pt",
              borderBottom: "black",
              borderBottomWidth: "1pt"
            }}
            debug={false}
            id={"region1"}
          >
            <View style={{ flexDirection: "row", height: "35pt" }}>
              <Image
                src={require("../../assets/rotometrics-logo.png")}
                style={{ width: 198, height: 46 }}
              />
              <Text style={styles.title}>REPAIR EVALUATION FORM</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "25vw",
                marginRight: "5vw"
              }}
            >
              <FieldContainer>
                <StrongText>Inspected By: </StrongText>
                <Text style={styles.text}>{this.props.inspectedBy}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Quote No.: </StrongText>
                <Text style={styles.text}>{this.props.quoteNumber}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Date Received: </StrongText>
                <Text style={styles.text}>{this.props.dateReceived}</Text>
              </FieldContainer>

              <FieldContainer>
                <StrongText>Complaint: </StrongText>
                <Text style={styles.text}>
                  {this.props.complaint ? "YES" : "NO"}
                </Text>
              </FieldContainer>
            </View>
          </Region>
          <Region
            style={{
              height: "140pt",
              borderBottom: "black",
              borderBottomWidth: "1pt"
            }}
            debug={false}
            id={"region2"}
          >
            <Row>
              <FieldContainer>
                <StrongText>Customer: </StrongText>
                <Text style={styles.text}>{this.props.customerName}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>P.O.: </StrongText>
                <Text style={styles.text}>{this.props.po}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Prev. Repair Order: </StrongText>
                <Text style={styles.text}>{this.props.prevRepairOrder}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Demand Class:</StrongText>
                <Text style={styles.text}>{this.props.demandClass}</Text>
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer>
                <StrongText>Die Type:</StrongText>
                <Text style={styles.text}>{this.props.dieType}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Serial No.</StrongText>
                <Text style={styles.text}>{this.props.serialNumber}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Cust. Special Mark:</StrongText>
                <Text style={styles.text}>{this.props.customSpecialMark}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Gear Bore:</StrongText>
                <Text style={styles.text}>{this.props.gearBore}</Text>
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer>
                <StrongText>PPA:</StrongText>
                <View
                  style={{
                    padding: "1",
                    alignItems: "center",
                    border: "black",
                    borderWidth: "2pt"
                  }}
                >
                  <Text style={styles.text}>{this.props.ppa1}</Text>
                </View>
                <View
                  style={{
                    padding: "1",
                    alignItems: "center",
                    border: "black",
                    borderWidth: "2pt"
                  }}
                >
                  <Text style={styles.text}>{this.props.ppa2}</Text>
                </View>
                <View
                  style={{
                    padding: "1",
                    alignItems: "center",
                    border: "black",
                    borderWidth: "2pt"
                  }}
                >
                  <Text style={styles.text}>
                    {this.props.ppa3 ? this.props.ppa3 : "        "}
                  </Text>
                </View>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Replace Gear:</StrongText>
                <Text style={styles.text}>{this.props.replaceGear}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Hub Dia:</StrongText>
                <Text style={styles.text}>{this.props.hubDiameter}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Face:</StrongText>
                <Text style={styles.text}>{this.props.face}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Gear DWG (if known):</StrongText>
                <Text style={styles.text}>{this.props.gearDWG}</Text>
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer>
                <StrongText>Qty Gears to be returned:</StrongText>
                <Text style={styles.text}>{this.props.gearsReturned}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText> *Overall width:</StrongText>
                <Text style={styles.text}>{this.props.overallWidth}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText> Inside Bearer Length:</StrongText>
                <Text style={styles.text}>{this.props.insideBearerLength}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Bearer Width:</StrongText>
                <Text style={styles.text}>{this.props.width}</Text>
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer>
                <StrongText>Original Job/Order #.:</StrongText>
                <Text style={styles.text}>{this.props.originalJob}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*P.D.:</StrongText>
                <Text style={styles.text}>{this.props.pd}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Weight:</StrongText>
                <Text style={styles.text}>{this.props.weight}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Body Length:</StrongText>
                <Text style={styles.text}>{this.props.bodyLength}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*Overall Length:</StrongText>
                <Text style={styles.text}>{this.props.overallLength}</Text>
              </FieldContainer>
            </Row>
          </Region>
          <View style={[styles.section, { flexDirection: "row", flex: 0.8 }]}>
            <View
              style={[
                styles.section,
                { flexDirection: "column", width: "70%" }
              ]}
            >
              <Region
                style={{
                  height: "54pt",
                  borderBottom: "black",
                  borderRight: "black",
                  borderBottomWidth: "1pt",
                  borderRightWidth: "1pt"
                }}
                debug={false}
                id={"region3"}
              >
                <FieldContainer>
                  <StrongText>*Cavity Type:</StrongText>
                  <Text style={styles.text}>{this.props.cavityType}</Text>
                </FieldContainer>
                <FieldContainer>
                  <StrongText>Spec. Cavity Type:</StrongText>
                  <Text style={styles.text}>
                    {this.props.specialCavityType !== "n/a"
                      ? this.props.specialCavityType
                      : ""}
                  </Text>
                </FieldContainer>
              </Region>
              <Region
                debug={false}
                id={"region4"}
                style={{
                  borderBottom: "black",
                  borderRight: "black",
                  borderBottomWidth: "1pt",
                  borderRightWidth: "1pt"
                }}
              >
                <StrongText style={{ marginLeft: "20pt", fontSize: "11pt" }}>
                  Check all that apply:{"\n\n"}
                </StrongText>
                <Row>
                  <FieldContainer>
                    <StrongText>Normal Wear </StrongText>
                    <Text style={styles.text}>
                      {this.props.normalWear ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Nicked </StrongText>
                    <Text style={styles.text}>
                      {this.props.nicked ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Journal Rev </StrongText>
                    <Text style={styles.text}>
                      {this.props.journalRev ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Journal Repl </StrongText>
                    <Text style={styles.text}>
                      {this.props.journalRepl ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Beat Down </StrongText>
                    <Text style={styles.text}>
                      {this.props.beatDown ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Welds req'd </StrongText>
                    <Text style={styles.text}>
                      {this.props.weldsRequired ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer
                    style={{
                      borderBottom: "black",
                      borderBottomWidth: "1pt",
                      paddingLeft: "8",
                      paddingRight: "8",
                      marginLeft: "-3"
                    }}
                  >
                    <StrongText>{this.props.weldsRequiredAmount}</StrongText>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Chipped </StrongText>
                    <Text style={styles.text}>
                      {this.props.chipped ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Abbrasive Wear </StrongText>
                    <Text style={styles.text}>
                      {this.props.abbrasiveWear ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Overall Blade Impact </StrongText>
                    <Text style={styles.text}>
                      {this.props.overallBladeImpact ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                </Row>
              </Region>
              <Region
                debug={false}
                id={"region6"}
                style={{
                  borderRight: "black",
                  borderRightWidth: "1pt"
                }}
              >
                <Row>
                  <FieldContainer>
                    <StrongText>Silicone Cavities</StrongText>
                    <Text style={styles.text}>
                      {this.props.siliconeCavities ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>GS Bearer Dia:</StrongText>
                    <Text style={styles.text}>{this.props.gsBearerDia}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Pattern Change:</StrongText>
                    <Text style={styles.text}>
                      {this.props.patternChange ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Non-GS Bearer Dia:</StrongText>
                    <Text style={styles.text}>{this.props.nonGSBearerDia}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Foam Cavities</StrongText>
                    <Text style={styles.text}>
                      {this.props.foamCavities ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Grind Estimate:</StrongText>
                    <Text style={styles.text}>{this.props.grindEstimate}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Non-Stick</StrongText>
                    <Text style={styles.text}>
                      {this.props.nonStick ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Custom Samples:</StrongText>
                    <Text style={styles.text}>
                      {this.props.customSamples ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>QC Sheet:</StrongText>
                    <Text style={styles.text}>
                      {this.props.qcSheet ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText># of Corners:</StrongText>
                    <Text style={styles.text}>
                      {this.props.numberOfCorners}
                    </Text>
                  </FieldContainer>
                </Row>
              </Region>
              <Region
                debug={false}
                id={"region7"}
                style={{
                  borderRight: "black",
                  borderRightWidth: "1pt",
                  borderTop: "black",
                  borderTopWidth: "1pt",
                  textAlign: "justify"
                }}
                wrap={false}
              >
                <FieldContainer>
                  <StrongText>Spare Parts to be Returned:</StrongText>
                  <Text style={styles.text}>
                    {this.props.sparePartsToBeReturned}
                  </Text>
                </FieldContainer>
                <FieldContainer>
                  <StrongText>Remarks: </StrongText>
                  <Text style={styles.text}>{this.props.remarks}</Text>
                </FieldContainer>
                <FieldContainer style={{ marginTop: "15" }}>
                  <StrongText>
                    * These fields are only required for NRP's
                  </StrongText>
                </FieldContainer>
              </Region>
            </View>
            <View style={styles.section}>
              <Region
                debug={false}
                id={"region5"}
                style={{
                  borderBottom: "black",
                  borderBottomWidth: "1pt"
                }}
              >
                <Row>
                  <FieldContainer>
                    <StrongText>*No. Ac.:</StrongText>
                    <Text style={styles.text}>{this.props.numberAcross}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Size. Ac.:</StrongText>
                    <Text style={styles.text}>{this.props.sizeAcross}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Eng/Cav:</StrongText>
                    <Text style={styles.text}>{this.props.engCav}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>*No. Ar.:</StrongText>
                    <Text style={styles.text}>{this.props.numberAround}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Size. Ar.:</StrongText>
                    <Text style={styles.text}>{this.props.sizeAround}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Total Eng Amount:</StrongText>
                    <Text style={styles.text}>{this.props.totEngAmt}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Perf:</StrongText>
                    <Text style={styles.text}>{this.props.perf}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Stock Source:</StrongText>
                    <Text style={styles.text}>
                      {!this.props.stockSource
                        ? "Rec'd with order"
                        : this.props.stockSource}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>SI #:</StrongText>
                    <Text style={styles.text}>{this.props.siNumber}</Text>
                  </FieldContainer>
                </Row>
              </Region>
              <Region
                debug={false}
                id="region8"
                style={{ flexDirection: "column", flex: 2 }}
              >
                <Image
                  cache={false}
                  src={this.props.qrCodeData}
                  style={{
                    flex: 6,
                    alignSelf: "center"
                  }}
                />
                <Text
                  style={[
                    styles.lightText,
                    { flex: 0.01, textAlign: "justify" }
                  ]}
                  wrap={false}
                >
                  {this.props.quoteString}
                </Text>
              </Region>
            </View>
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
    margin: 1,
    flex: 1
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: "10pt",
    marginLeft: "2pt"
  },
  lightText: {
    fontFamily: "Courier-Oblique",
    fontSize: "7pt",
    marginLeft: "4pt",
    marginRight: "4pt"
  },
  title: {
    fontSize: "24pt",
    fontFamily: "Helvetica-Bold",
    marginLeft: "35vw"
  }
});

//Styled Components
const FieldContainer = styled.View`
  margin-top: 4pt;
  margin-bottom: 8pt;
  flex-direction: row;
  margin-right: 5pt;
  margin-left: 15pt;
`;
const Region = styled.View`
  padding: 8pt;
`;
const Row = styled.View`
  margin: 0;
  flex-direction: row;
`;
const StrongText = styled.Text`
  font-size: 10pt;
  font-family: "Helvetica-Bold";
  font-style: bold;
`;
