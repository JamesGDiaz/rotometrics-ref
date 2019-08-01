import * as Yup from "yup";

const newFormSchema = Yup.object().shape({
  /**
   * Section 1
   * Order data
   */

  inspectedBy: Yup.string()
    .max(70, "The name is too long")
    .required("Please enter your name"),
  quoteNumber: Yup.string()
    .max(20, "Too long")
    .required("This field is required"),
  dateReceived: Yup.date().required("This field is required"),
  customerName: Yup.string()
    .max(70, "Too long")
    .required("This field is required"),
  po: Yup.string().max(25, "Too long"),
  prevRepairOrder: Yup.string().max(25, "Too long"),
  complaint: Yup.boolean().default(false),

  /**
   * Section 2
   * Die Characteristics
   */
  demandClass: Yup.string(),
  dieType: Yup.string(),
  serialNumber: Yup.string().max(35, "Too long"),
  customSpecialMark: Yup.string().max(25),
  numberOfTeeth: Yup.number()
    .integer("Please input a valid integer value")
    .min(1)
    .max(1024),
  replaceGear: Yup.string(),
  gearsReturned: Yup.number()
    .min(1)
    .max(30),
  ppa1: Yup.string().max(11),
  ppa2: Yup.string().max(11),
  ppa3: Yup.string().max(11),
  face: Yup.string().max(15, "Too long"),
  gearBore: Yup.string().max(15, "Too long"),
  gearDWG: Yup.string().max(15, "Too long"),
  hubDiameter: Yup.string().max(15, "Too long"),
  insideBearerLength: Yup.string().max(15, "Too long"),
  overallWidth: Yup.string().max(15, "Too long"),
  weight: Yup.string().max(15, "Too long"),
  overallLength: Yup.string().max(15, "Too long"),
  bodyLength: Yup.string().max(15, "Too long"),
  bearerWidth: Yup.string().max(15, "Too long"),
  originalJob: Yup.string().max(15, "Too long"),
  pd: Yup.string().max(15, "Too long"),

  /**
   * Section 3
   * Cavities Data
   */
  cavityType: Yup.string(),
  specialCavityType: Yup.string(),
  numberAcross: Yup.number(),
  sizeAcross: Yup.string(),
  numberAround: Yup.number(),
  sizeAround: Yup.string(),
  engCav: Yup.string(),
  totEngAmt: Yup.number(),
  perf: Yup.string(),
  siNumber: Yup.string(),

  /**
   * Section 4
   * Repair Type
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

  /**
   * Section 5
   * Repair Type #2
   */
  gsBearerDia: Yup.string(),
  nonGSBearerDia: Yup.string(),
  customSamples: Yup.string(),
  numberOfCorners: Yup.number(),
  grindEstimate: Yup.string(),
  siliconeCavities: Yup.boolean(),
  patternChange: Yup.boolean(),
  foamCavities: Yup.boolean(),
  nonStick: Yup.boolean(),
  qcSheet: Yup.boolean(),

  /**
   * Section 6
   * Additional Info
   */
  sparePartsToBeReturned: Yup.string().max("100"),
  remarks: Yup.string().max("120")
});

export default newFormSchema;
