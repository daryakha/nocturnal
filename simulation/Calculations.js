export let calculationValues = {
	// Lampenart
	purchaseCosts: 0,
	attractedInsects: 0,
	electricityCostsPerLamp: 0,
	lamptypeRoadSafety: 0,
	// Lampenhöhe
	lampHeightAttraction: 0,
	// Laternenanzahl
	lanternAmount: 0,
	// Richtcharakterisik
	polarPatternAttraction: 0,
	polarPatternRoadSafety: 0,
	polarPatternSecurity: 0,
	// Lichtstärke
	illuminanceElectricityCosts: 0,
	illuminanceAttraction: 0,
	illuminanceSecurity: 0,
	// Sensortechnik
	sensorTechElectricityCosts: 0,
	sensorTechAttraction: 0,
	sensorTechSecurity: 0,
};

export let maxValues = {
	electricityCosts: 11160,
	conversionCosts: 12000,
	dyingInsects: 5054000,
	security: 100,
	roadSafety: 100
};
// calculations
export function calculation(p) {
	outputParameters.security = p.round(100 *calculationValues.polarPatternSecurity * calculationValues.illuminanceSecurity * calculationValues.sensorTechSecurity);
	outputParameters.electricityCosts = (calculationValues.lanternAmount * calculationValues.electricityCostsPerLamp) * calculationValues.illuminanceElectricityCosts * calculationValues.sensorTechElectricityCosts;
	outputParameters.conversionCosts = calculationValues.lanternAmount * calculationValues.purchaseCosts; 
	outputParameters.dyingInsects = p.round((calculationValues.attractedInsects * calculationValues.lanternAmount * (calculationValues.lampHeightAttraction * calculationValues.polarPatternAttraction * calculationValues.illuminanceAttraction * calculationValues.sensorTechAttraction) * 0.66), [-3]);
	outputParameters.roadSafety = p.round(80 * (calculationValues.lamptypeRoadSafety * calculationValues.polarPatternRoadSafety));
}

export let outputParameters = {
	security: 0,
	electricityCosts: 0,
	conversionCosts: 0,
	dyingInsects: 0,
	roadSafety: 0,
};

// test to check, if values are set in simulation.js
export function test() {
	console.log(
		"purchase costs: ",
		calculationValues.purchaseCosts,
		"attracted insects: ",
		calculationValues.attractedInsects,
		"electricity costs per lamp: ",
		calculationValues.electricityCostsPerLamp,
		"lamp type road safety: ",
		calculationValues.lamptypeRoadSafety,
		"lamp height attraction: ",
		calculationValues.lampHeightAttraction,
		"lantern amount: ",
		calculationValues.lanternAmount,
		"polar pattern Attraction: ",
		calculationValues.polarPatternAttraction
	);
}