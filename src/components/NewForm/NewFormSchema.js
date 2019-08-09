import * as Yup from "yup";

const newFormSchema = Yup.object().shape({
  /**
   * Section 1
   * Order data
   */

  receivedBy: Yup.string()
    .max(60, "the name is too long")
    .required("this field is required"),
  inspectedBy: Yup.string()
    .max(60, "the name is too long")
    .required("this field is required"),
  manufacturedBy: Yup.string().max(60, "the name is too long"),
  quoteNumber: Yup.string()
    .max(20, "too long")
    .required("this field is required"),
  dateReceived: Yup.date().required("this field is required"),
  customerName: Yup.string()
    .max(60, "too long")
    .required("please enter the customers' name"),
  po: Yup.string().max(25, "too long"),
  prevRepairOrder: Yup.string().max(25, "too long"),
  complaint: Yup.boolean().default(false),
  demandClass: Yup.string(),
  shipDate: Yup.date(),
  shipMethod: Yup.string(),

  /**
   * Section 2
   * Die Characteristics
   */

  dieType: Yup.string(),
  serialNumber: Yup.string().max(35, "too long"),
  customSpecialMark: Yup.string().max(25),
  numberOfteeth: Yup.number()
    .integer("please input a valid integer value")
    .min(1)
    .max(999),
  replaceGear: Yup.string(),
  gearsReturned: Yup.number()
    .min(0)
    .max(30),
  ppa1: Yup.string().max(11),
  ppa2: Yup.string().max(11),
  ppa3: Yup.string().max(11),
  gearBore: Yup.string().max(15, "too long"),
  gearDWG: Yup.string().max(15, "too long"),
  gearSide: Yup.string().max(15, "too long"),
  gearCondition: Yup.string().max(15, "too long"),
  weight: Yup.string().max(15, "too long"),
  bodyLength: Yup.string().max(15, "too long"),
  bearerWidth: Yup.string().max(15, "too long"),
  originalJob: Yup.string().max(15, "too long"),
  pd: Yup.string().max(15, "too long"),
  rollDWG: Yup.string().max(15, "too long"),
  noGearReceived: Yup.boolean(),

  /**
   * Section 3
   * Cavities Data
   */
  cavityType: Yup.string(),
  specialCavityType: Yup.string(),
  numberAcross: Yup.number(),
  sizeAcross: Yup.string().max(15, "too long"),
  numberAround: Yup.number(),
  sizeAround: Yup.string().max(15, "too long"),
  engCav: Yup.string().max(15, "too long"),
  totEngAmt: Yup.number(),
  cutType: Yup.string().max(15, "too long"),
  position: Yup.string().max(15, "too long"),
  labelAppl: Yup.string().max(15, "too long"),
  meLogNumber: Yup.string().max(15, "too long"),

  /**
   * Section 4
   * Repair type
   */

  normalWear: Yup.boolean(),
  nicked: Yup.boolean(),
  beatDown: Yup.boolean(),
  journalRev: Yup.boolean(),
  journalRepl: Yup.boolean(),
  weldsRequired: Yup.boolean(),
  weldsRequiredAmount: Yup.number(),
  chipped: Yup.boolean(),
  abbrasiveWear: Yup.boolean(),
  overallBladeImpact: Yup.boolean(),
  drillShaft: Yup.boolean(),

  /**
   * Section 5
   * Repair Type #2
   */
  matlLayer1: Yup.string().max(27, "too long"),
  matlLayer2: Yup.string().max(27, "too long"),
  matlLayer3: Yup.string().max(27, "too long"),
  matlLayer4: Yup.string().max(27, "too long"),
  matlLayer5: Yup.string().max(27, "too long"),
  matlLayer6: Yup.string().max(27, "too long"),
  stockSource: Yup.string().max(20, "too long"),
  siNumber: Yup.string().max(15, "too long"),
  treatment: Yup.string().max(15, "too long"),
  noOfPerfSetsToAdd: Yup.number()
    .integer()
    .max(99),
  smallestNo: Yup.number()
    .integer()
    .max(99),
  clearance1: Yup.string().max(11, "too long"),
  clearance2: Yup.string().max(11, "too long"),
  clearance3: Yup.string().max(11, "too long"),
  clearance4: Yup.string().max(11, "too long"),
  impression: Yup.string().max(15, "too long"),
  wheelMaterial: Yup.string().max(15, "too long"),
  qtyScoreBlade: Yup.string().max(15, "too long"),
  qtyPunchWheels: Yup.string().max(15, "too long"),

  /**
   * Section 6
   * Repair type #3
   */
  punchesInTool: Yup.string().max(15, "too long"),
  punchesLoose: Yup.string().max(15, "too long"),
  numberOfCases: Yup.number().integer(),
  inpsectionClearance1: Yup.string().max(15, "too long"),
  inpsectionClearance2: Yup.string().max(15, "too long"),
  gsBearerDia: Yup.string().max(15, "too long"),
  nonGSBearerDia: Yup.string().max(15, "too long"),
  customSamples: Yup.string().max(15, "too long"),
  numberOfCorners: Yup.number().max(9999, "too long"),
  grindEstimate: Yup.string().max(15, "too long"),
  siliconeCavities: Yup.boolean(),
  patternChange: Yup.boolean(),
  foamCavities: Yup.boolean(),
  tightTol: Yup.boolean(),
  nonStick: Yup.boolean(),
  qcSheet: Yup.boolean(),
  boxType: Yup.string(),
  miscBox: Yup.string().max(15, "too long"),
  crateRecdIn: Yup.string().max(15, "too long"),
  crateNumber: Yup.string().max(15, "too long"),
  vacuumToolInfo: Yup.string().max(20, "too long"),
  weldCost: Yup.string().max(15, "too long"),
  finishingCost: Yup.string().max(15, "too long"),
  subTotalCost: Yup.string().max(15, "too long"),
  multiLevelCost: Yup.string().max(15, "too long"),
  nscCost: Yup.string().max(15, "too long"),
  chromeCost: Yup.string().max(15, "too long"),
  cornersCost: Yup.string().max(15, "too long"),
  otherCost: Yup.string().max(15, "too long"),
  totalCost: Yup.string().max(15, "too long"),

  /**
   * Section 7
   * Additional Info
   */
  sparePartsToBeReturned: Yup.string().max(
    "40",
    "too long (limit is 40 characters)"
  ),
  remarks: Yup.string().max("100", "too long (limit is 100 characters)"),
  miscProductDescription: Yup.string().max(
    "40",
    "too long (limit is 40 characters)"
  ),
  tax: Yup.string()
});

export default newFormSchema;
