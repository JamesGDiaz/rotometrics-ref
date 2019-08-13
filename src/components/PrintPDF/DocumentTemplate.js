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
    receivedBy: "",
    manufacturedBy: "",
    quoteNumber: "",
    dateReceived: "",
    complaint: false,
    customerName: "",
    po: "",
    prevRepairOrder: "",
    demandClass: "",
    shipDate: "",
    shipMethod: "",
    /**
     * Section 2
     * Die Characteristics
     */

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
    gearSide: "",
    gearCondition: "",
    weight: "",
    bodyLength: "",
    bearerWidth: "",
    originalJob: "",
    pd: "",
    rollDWG: "",
    noGearReceived: false,

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
    cutType: "",
    position: "",
    labelAppl: "",
    meLogNumber: "",

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
    drillShaft: false,

    /**
     * Section 5
     * Repair Type #2
     */
    matlLayer1: "",
    matlLayer2: "",
    matlLayer3: "",
    matlLayer4: "",
    matlLayer5: "",
    matlLayer6: "",
    stockSource: "",
    siNumber: "",
    treatment: "",
    noOfPerfSetsToAdd: 0,
    smallestNo: 0,
    clearance1: "",
    clearance2: "",
    clearance3: "",
    clearance4: "",
    impression: "",
    wheelMaterial: "",
    qtyScoreBlade: "",
    qtyPunchWheels: "",

    /**
     * Section 6
     * Repair Type #3
     */
    punchesInTool: "",
    punchesLoose: "",
    numberOfCases: 0,
    inpsectionClearance1: "",
    inpsectionClearance2: "",
    gsBearerDia: "",
    nonGSBearerDia: "",
    customSamples: "",
    numberOfCorners: 0,
    grindEstimate: "",
    siliconeCavities: false,
    patternChange: false,
    foamCavities: false,
    tightTol: false,
    nonStick: false,
    qcSheet: false,
    boxType: "",
    miscBox: "",
    crateRecdIn: "",
    crateNumber: "",
    vacuumToolInfo: "",
    weldCost: "",
    finishingCost: "",
    subTotalCost: "",
    multiLevelCost: "",
    nscCost: "",
    chromeCost: "",
    cornersCost: "",
    otherCost: "",
    totalCost: "",

    /**
     * Section 6
     * Additional Info
     */
    sparePartsToBeReturned: "",
    remarks: "",
    miscProductDescription: "",
    tax: ""
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
              height: "70pt"
            }}
            debug={false}
            id={"region1"}
          >
            <View style={{ flexDirection: "row", height: "35pt" }}>
              <Image
                src={require("../../assets/rotometrics-logo.png")}
                style={{ width: 147, height: 35 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.title}>REPAIR EVALUATION FORM</Text>
                <FieldContainer style={{ marginLeft: "35vw" }}>
                  <StrongText>Quote: </StrongText>
                  <Text style={styles.text}>{this.props.quoteNumber}</Text>
                </FieldContainer>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: "8pt" }}>
              <View
                style={{
                  flex: "1",
                  flexDirection: "row",
                  border: "black",
                  borderWidth: "2pt",
                  paddingLeft: "4pt"
                }}
              >
                <StrongText
                  style={{ fontFamily: "Helvetica-Bold", fontSize: "16pt" }}
                >
                  PURPOSE:{" "}
                </StrongText>
                <Text style={{ fontSize: "16pt" }}>
                  Order Entry/Receiving/Idle Inspection
                </Text>
              </View>
              <View
                style={{
                  flex: "1",
                  flexDirection: "row",
                  border: "black",
                  borderWidth: "2pt",
                  borderLeftWidth: "0pt",
                  paddingLeft: "4pt"
                }}
              >
                <StrongText
                  style={{ fontFamily: "Helvetica-Bold", fontSize: "16pt" }}
                >
                  SCOPE:{" "}
                </StrongText>
                <Text style={{ fontSize: "16pt" }}>
                  This site is specific to MIS
                </Text>
              </View>
            </View>
          </Region>
          <Region
            style={{
              flexDirection: "column",
              height: "100pt",
              borderBottom: "black",
              borderBottomWidth: "2pt"
            }}
            debug={false}
            id={"region2"}
          >
            <Row>
              <FieldContainer>
                <StrongText>Received By: </StrongText>
                <Text style={styles.text}>{this.props.receivedBy}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Inspected By: </StrongText>
                <Text style={styles.text}>{this.props.inspectedBy}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Manufactured By: </StrongText>
                <Text style={styles.text}>{this.props.manufacturedBy}</Text>
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
            </Row>
            <Row>
              <FieldContainer>
                <StrongText>Prev. Repair Order: </StrongText>
                <Text style={styles.text}>{this.props.prevRepairOrder}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Customer: </StrongText>
                <Text style={styles.text}>{this.props.customerName}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>P.O.: </StrongText>
                <Text style={styles.text}>{this.props.po}</Text>
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
                <StrongText>Ship Date:</StrongText>
                <Text style={styles.text}>{this.props.shipDate}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Ship Method:</StrongText>
                <Text style={styles.text}>{this.props.shipMethod}</Text>
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer debug={false}>
                <StrongText style={{ alignSelf: "center", marginRight: "6pt" }}>
                  PPA:
                </StrongText>
                <View
                  style={{
                    paddingLeft: "5",
                    paddingRight: "5",
                    alignItems: "center",
                    border: "black",
                    borderWidth: "1pt"
                  }}
                >
                  <Text style={styles.text}>{this.props.ppa1}</Text>
                </View>
                <View
                  style={{
                    paddingLeft: "5",
                    paddingRight: "5",
                    alignItems: "center",
                    border: "black",
                    borderWidth: "1pt",
                    borderLeftWidth: "0pt"
                  }}
                >
                  <Text style={styles.text}>{this.props.ppa2}</Text>
                </View>
                <View
                  style={{
                    paddingLeft: "5",
                    paddingRight: "5",
                    alignItems: "center",
                    border: "black",
                    borderWidth: "1pt",
                    borderLeftWidth: "0pt"
                  }}
                >
                  <Text style={styles.text}>
                    {this.props.ppa3 ? this.props.ppa3 : "           "}
                  </Text>
                </View>
              </FieldContainer>
              <FieldContainer>
                <StrongText>*# of Teeth:</StrongText>
                <Text style={styles.text}>{this.props.numberOfTeeth}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Replacement Gears:</StrongText>
                <Text style={styles.text}>{this.props.replaceGear}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Qty Gears to be returned:</StrongText>
                <Text style={styles.text}>{this.props.gearsReturned}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Gear Bore:</StrongText>
                <Text style={styles.text}>{this.props.gearBore}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Gear DWG (if known):</StrongText>
                <Text style={styles.text}>{this.props.gearDWG}</Text>
              </FieldContainer>
            </Row>
            <Row>
              <FieldContainer>
                <StrongText>Bearer Width:</StrongText>
                <Text style={styles.text}>{this.props.bearerWidth}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Original Job/Order #.:</StrongText>
                <Text style={styles.text}>{this.props.originalJob}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Roll DWG:</StrongText>
                <Text style={styles.text}>{this.props.overallWidth}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>P.D.:</StrongText>
                <Text style={styles.text}>{this.props.pd}</Text>
              </FieldContainer>

              <FieldContainer>
                <StrongText>Weight:</StrongText>
                <Text style={styles.text}>{this.props.weight}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Body Length:</StrongText>
                <Text style={styles.text}>{this.props.bodyLength}</Text>
              </FieldContainer>
              <FieldContainer>
                <StrongText>Condition of Gears:</StrongText>
                <Text style={styles.text}>{this.props.gearCondition}</Text>
              </FieldContainer>
            </Row>
          </Region>
          <View style={[styles.section, { flexDirection: "row" }]}>
            <View
              style={[
                styles.section,
                {
                  flex: 1.3,
                  flexDirection: "column",
                  border: "black",
                  borderRightWidth: "2pt"
                }
              ]}
              debug={false}
            >
              <Region
                style={{
                  flexDirection: "row",
                  height: "25pt",
                  border: "black",
                  borderBottomWidth: "2pt"
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
                      : "n/a"}
                  </Text>
                </FieldContainer>
              </Region>
              <Region
                debug={false}
                id={"region4"}
                style={{
                  borderBottom: "black",
                  borderBottomWidth: "2pt"
                }}
              >
                <Row style={{ marginBottom: "4pt" }}>
                  <StrongText style={{ marginLeft: "10pt", fontSize: "11pt" }}>
                    Check all that apply:{"\n"}
                  </StrongText>
                </Row>
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
                  <FieldContainer>
                    <StrongText>Drill Shaft/Vac Die </StrongText>
                    <Text style={styles.text}>
                      {this.props.drillShaft ? "YES" : "NO"}
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
                style={{
                  borderBottom: "black",
                  borderBottomWidth: "2pt"
                }}
              >
                <Row>
                  <FieldContainer>
                    <StrongText>Matl Layer 1:</StrongText>
                    <Text style={styles.text}>{this.props.matlLayer1}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Stock Source:</StrongText>
                    <Text style={styles.text}>{this.props.stockSource}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>SI #:</StrongText>
                    <Text style={styles.text}>{this.props.siNumber}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Matl Layer 2:</StrongText>
                    <Text style={styles.text}>{this.props.matlLayer2}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Treatment:</StrongText>
                    <Text style={styles.text}>{this.props.treatment}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Impression:</StrongText>
                    <Text style={styles.text}>{this.props.impression}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Matl Layer 3:</StrongText>
                    <Text style={styles.text}>{this.props.matlLayer3}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Perf Sets To Add:</StrongText>
                    <Text style={styles.text}>
                      {this.props.noOfPerfSetsToAdd}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Smallest No.:</StrongText>
                    <Text style={styles.text}>{this.props.smallestNo}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Matl Layer 4:</StrongText>
                    <Text style={styles.text}>{this.props.matlLayer4}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Matl Layer 5:</StrongText>
                    <Text style={styles.text}>{this.props.matlLayer5}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Clearance 1:</StrongText>
                    <Text style={styles.text}>{this.props.clearance1}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Clearance 2:</StrongText>
                    <Text style={styles.text}>{this.props.clearance2}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Matl Layer 6:</StrongText>
                    <Text style={styles.text}>{this.props.matlLayer6}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Clearance 3:</StrongText>
                    <Text style={styles.text}>{this.props.clearance3}</Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>*Clearance 4:</StrongText>
                    <Text style={styles.text}>{this.props.clearance4}</Text>
                  </FieldContainer>
                </Row>
              </Region>
              <Region
                debug={false}
                id={"region6"}
                style={{
                  borderBottom: "black",
                  borderBottomWidth: "2pt"
                }}
              >
                <Row>
                  <FieldContainer s>
                    <StrongText>Return Spare Parts:</StrongText>
                    <Text style={styles.text}>
                      {this.props.sparePartsToBeReturned}
                    </Text>
                  </FieldContainer>
                </Row>
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
                  <FieldContainer>
                    <StrongText>Non-GS Bearer Dia:</StrongText>
                    <Text style={styles.text}>{this.props.nonGSBearerDia}</Text>
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
                    <StrongText>Grind Estimate:</StrongText>
                    <Text style={styles.text}>{this.props.grindEstimate}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Foam Cavities</StrongText>
                    <Text style={styles.text}>
                      {this.props.foamCavities ? "YES" : "NO"}
                    </Text>
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
                  <FieldContainer>
                    <StrongText># of Corners:</StrongText>
                    <Text style={styles.text}>
                      {this.props.numberOfCorners}
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
                    <StrongText>Inspection Clearance #1:</StrongText>
                    <Text style={styles.text}>
                      {this.props.inpsectionClearance1}
                    </Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Thight Tol </StrongText>
                    <Text style={styles.text}>
                      {this.props.tightTol ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                  <FieldContainer>
                    <StrongText>Inspection Clearance #2:</StrongText>
                    <Text style={styles.text}>
                      {this.props.inpsectionClearance2}
                    </Text>
                  </FieldContainer>
                </Row>
              </Region>
              <Region
                debug={false}
                id={"region7"}
                style={{
                  height: "24pt",
                  flexDirection: "row",
                  borderBottom: "black",
                  borderBottomWidth: "2pt"
                }}
              >
                <FieldContainer>
                  <StrongText>Wheel Material:</StrongText>
                  <Text style={styles.text}>{this.props.wheelMaterial}</Text>
                </FieldContainer>
                <FieldContainer>
                  <StrongText>Qty Score Blade:</StrongText>
                  <Text style={styles.text}>{this.props.qtyScoreBlade}</Text>
                </FieldContainer>
                <FieldContainer>
                  <StrongText>Qty Punch Wheels:</StrongText>
                  <Text style={styles.text}>{this.props.qtyPunchWheels}</Text>
                </FieldContainer>
              </Region>
              <Region
                debug={false}
                id={"region7"}
                style={{
                  height: "48pt",
                  borderBottom: "black",
                  borderBottomWidth: "2pt",
                  textAlign: "justify"
                }}
                wrap={false}
              >
                <Row>
                  <FieldContainer>
                    <StrongText>Tax: </StrongText>
                    <Text style={styles.text}>
                      {this.props.tax ? "YES" : "NO"}
                    </Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Remarks: </StrongText>
                    <Text style={[styles.text, { fontSize: "9pt" }]}>
                      {this.props.remarks}
                    </Text>
                  </FieldContainer>
                </Row>
              </Region>
              <Region>
                <FieldContainer>
                  <Text
                    style={[
                      styles.text,
                      { marginRight: "36pt", fontSize: "8pt" }
                    ]}
                  >
                    FCD-00229
                  </Text>
                  <StrongText style={{ fontSize: "8pt" }}>
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
                    <StrongText>*Cut type:</StrongText>
                    <Text style={styles.text}>{this.props.cutType}</Text>
                  </FieldContainer>
                  <FieldContainer style={{ marginLeft: "48pt" }}>
                    <StrongText>Position:</StrongText>
                    <Text style={styles.text}>{this.props.position}</Text>
                  </FieldContainer>
                </Row>
                <Row>
                  <FieldContainer>
                    <StrongText>Label Application:</StrongText>
                    <Text style={styles.text}>{this.props.labelAppl}</Text>
                  </FieldContainer>
                  <FieldContainer style={{ marginLeft: "36pt" }}>
                    <StrongText>ME Log Number:</StrongText>
                    <Text style={styles.text}>{this.props.meLogNumber}</Text>
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
    fontSize: "5pt",
    marginLeft: "4pt",
    marginRight: "4pt"
  },
  title: {
    fontSize: "22pt",
    fontFamily: "Helvetica-Bold",
    marginLeft: "35vw"
  }
});

//Styled Components
const FieldContainer = styled.View`
  margin-top: 3pt;
  margin-bottom: 3pt;
  flex-direction: row;
  margin-right: 5pt;
  margin-left: 15pt;
`;
const Region = styled.View`
  padding: 1pt;
`;
const Row = styled.View`
  flex-direction: row;
`;
const StrongText = styled.Text`
  font-size: 10pt;
  font-family: "Helvetica-Bold";
  font-style: bold;
`;
