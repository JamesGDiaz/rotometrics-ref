var dictionary = new Map([
  ["receivedBy", "~00"],
  ["inspectedBy", "~1"],
  ["manufacturedBy", "~2"],
  ["quoteNumber", "~3"],
  ["dateReceived", "~4"],
  ["customerName", "~5"],
  ["po", "~6"],
  ["prevRepairOrder", "~8"],
  ["complaint", "~9"],
  ["demandClass", "~A"],
  ["shipDate", "~B"],
  ["shipMethod", "~C"],
  ["dieType", "~D"],
  ["serialNumber", "~E"],
  ["customSpecialMark", "~F"],
  ["numberOfteeth", "~G"],
  ["replaceGear", "~H"],
  ["gearsReturned", "~I"],
  ["ppa1", "~J"],
  ["ppa2", "~K"],
  ["ppa3", "~L"],
  ["gearBore", "~M"],
  ["gearDWG", "~N"],
  ["gearSide", "~O"],
  ["gearCondition", "~P"],
  ["weight", "~Q"],
  ["bodyLength", "~R"],
  ["bearerWidth", "~S"],
  ["originalJob", "~T"],
  ["pd", "~U"],
  ["rollDWG", "~V"],
  ["noGearReceived", "~W"],
  ["cavityType", "~X"],
  ["specialCavityType", "~Y"],
  ["numberAcross", "~Z"],
  ["numberAround", "~a"],
  ["sizeAround", "~b"],
  ["engCav", "~c"],
  ["totEngAmt", "~d"],
  ["cutType", "~e"],
  ["position", "~f"],
  ["labelAppl", "~g"],
  ["meLogNumber", "~h"],
  ["normalWear", "~i"],
  ["nicked", "~j"],
  ["beatDown", "~k"],
  ["journalRev", "~l"],
  ["journalRepl", "~m"],
  ["weldsRequired", "~n"],
  ["weldsRequiredAmount", "~o"],
  ["chipped", "~p"],
  ["abbrasiveWear", "~q"],
  ["overallBladeImpact", "~r"],
  ["drillShaft", "~s"],
  ["matlLayer1", "~t"],
  ["matlLayer2", "~u"],
  ["matlLayer3", "~v"],
  ["matlLayer4", "~w"],
  ["matlLayer5", "~x"],
  ["matlLayer6", "~y"],
  ["stockSource", "~z"],
  ["siNumber", "~00"],
  ["treatment", "~01"],
  ["noOfPerfSetsToAdd", "~02"],
  ["smallestNo", "~03"],
  ["clearance1", "~04"],
  ["clearance2", "~05"],
  ["clearance3", "~06"],
  ["clearance4", "~07"],
  ["impression", "~08"],
  ["wheelMaterial", "~09"],
  ["qtyScoreBlade", "~0A"],
  ["qtyPunchWheels", "~0B"],
  ["punchesInTool", "~0C"],
  ["punchesLoose", "~0D"],
  ["numberOfCases", "~0E"],
  ["inpsectionClearance1", "~0F"],
  ["inpsectionClearance2", "~0G"],
  ["gsBearerDia", "~0H"],
  ["nonGSBearerDia", "~0I"],
  ["customSamples", "~0J"],
  ["numberOfCorners", "~0K"],
  ["grindEstimate", "~0L"],
  ["siliconeCavities", "~0M"],
  ["patternChange", "~0N"],
  ["foamCavities", "~0O"],
  ["tightTol ", "~0P"],
  ["nonStick ", "~0Q"],
  ["qcSheet", "~0R"],
  ["boxType", "~0S"],
  ["miscBox", "~0T"],
  ["crateRecdIn", "~0U"],
  ["crateNumber", "~0V"],
  ["vacuumToolInfo", "~0W"],
  ["weldCost", "~0X"],
  ["finishingCost", "~0Y"],
  ["subTotalCost", "~0Z"],
  ["multiLevelCost", "~0a"],
  ["nscCost", "~0b"],
  ["chromeCost", "~0c"],
  ["cornersCost", "~0d"],
  ["otherCost", "~0e"],
  ["totalCost", "~0f"],
  ["sparePartsToBeReturned", "~0g"],
  ["remarks", "~0h"],
  ["miscProductDescription", "~0i"],
  ["tax", "~0j"],
  ["sizeAcross", "~0k"]
  /**
   * ...
   */
]);

export function fromSchemaToId(jsondata: string) {
  dictionary.forEach((value, key) => {
    jsondata = jsondata.toString().replace(`"${key}"`, `${value}`);
  });
  console.debug(jsondata);
  return jsondata;
}
export function fromIdToSchema(jsondata: string) {
  dictionary.forEach((value, key) => {
    jsondata = jsondata.toString().replace(`${value}`, `"${key}"`);
  });
  console.debug(jsondata);
  return jsondata;
}