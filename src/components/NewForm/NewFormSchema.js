import * as Yup from "yup";

const newFormSchema = Yup.object().shape({
  /**
   * Section 1
   * Order data
   */

  inspectedBy: Yup.string()
    .max(60, "the name is too long")
    .required("please enter your name"),
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

  /**
   * Section 2
   * Die Characteristics
   */
  demandClass: Yup.string(),
  dietype: Yup.string(),
  serialNumber: Yup.string().max(35, "too long"),
  customSpecialMark: Yup.string().max(25),
  numberOfteeth: Yup.number()
    .integer("please input a valid integer value")
    .min(1)
    .max(1024),
  replaceGear: Yup.string(),
  gearsReturned: Yup.number()
    .min(1)
    .max(30),
  ppa1: Yup.string().max(11),
  ppa2: Yup.string().max(11),
  ppa3: Yup.string().max(11),
  face: Yup.string().max(15, "too long"),
  gearBore: Yup.string().max(15, "too long"),
  gearDWG: Yup.string().max(15, "too long"),
  hubDiameter: Yup.string().max(15, "too long"),
  insideBearerLength: Yup.string().max(15, "too long"),
  overallWidth: Yup.string().max(15, "too long"),
  weight: Yup.string().max(15, "too long"),
  overallLength: Yup.string().max(15, "too long"),
  bodyLength: Yup.string().max(15, "too long"),
  bearerWidth: Yup.string().max(15, "too long"),
  originalJob: Yup.string().max(15, "too long"),
  pd: Yup.string().max(15, "too long"),
  stockSource: Yup.string().max(15, "too long"),
  gearSide: Yup.string().max(15, "too long"),
  noGearReceived: Yup.boolean(),

  /**
   * Section 3
   * Cavities Data
   */
  cavitytype: Yup.string(),
  specialCavitytype: Yup.string(),
  numberAcross: Yup.number(),
  sizeAcross: Yup.string().max(15, "too long"),
  numberAround: Yup.number(),
  sizeAround: Yup.string().max(15, "too long"),
  engCav: Yup.string().max(15, "too long"),
  totEngAmt: Yup.number(),
  perf: Yup.string(),
  siNumber: Yup.string().max(15, "too long"),

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

  /**
   * Section 5
   * Repair type #2
   */
  gsBearerDia: Yup.string().max(15, "too long"),
  nonGSBearerDia: Yup.string().max(15, "too long"),
  customSamples: Yup.string().max(15, "too long"),
  numberOfCorners: Yup.number().max(15, "too long"),
  grindEstimate: Yup.string().max(15, "too long"),
  siliconeCavities: Yup.boolean(),
  patternChange: Yup.boolean(),
  foamCavities: Yup.boolean(),
  nonStick: Yup.boolean(),
  qcSheet: Yup.boolean(),

  /**
   * Section 6
   * Additional Info
   */
  sparePartsToBeReturned: Yup.string().max(
    "60",
    "too long (limit is 60 characters)"
  ),
  remarks: Yup.string().max("80", "too long (limit is 80 characters)")
});

export default newFormSchema;
