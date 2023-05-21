// LAMPENART
export let ledWarm = {
	purchaseCosts: 120,
	attractedInsects: 14965,
	electricityCostsPerLamp: 84,
	lamptypeRoadSafety: 0.97
}
export let ledCold = {
	purchaseCosts: 120,
	attractedInsects: 27375,
	electricityCostsPerLamp: 77,
	lamptypeRoadSafety: 1
}
export let nav = {
	purchaseCosts: 45,
	attractedInsects: 59495,
	electricityCostsPerLamp: 124,
	lamptypeRoadSafety: 0.94
}

// LAMPENHÖHE
export let threeMeters = {
	lampHeightAttraction: 0.8
}
export let sixMeters = {
	lampHeightAttraction: 1
}
export let nineMeters = {
    lampHeightAttraction: 1.3
}

// LATERNENANZAHL
export let street = {
	lampAmount: 100
}
export let area = {
	lampAmount: 2000
}
export let city = {
	lampAmount: 16000
}

// RICHTCHARAKTERISTIK
export let insectfriendlyLight = {
	polarPatternAttraction: 0.8,
	polarPatternRoadSafety: 0.97,
	polarPatternSecurity: 0.95
}
export let mushroomLight = {
	polarPatternAttraction: 1,
	polarPatternRoadSafety: 0.99,
	polarPatternSecurity: 0.99
}
export let suitcaseLight = {
	polarPatternAttraction: 1.1,
	polarPatternRoadSafety: 1,
	polarPatternSecurity: 1
}

// LICHTSTÄRKE
export let halfIntensity = {
	illuminanceElectricityCosts: 0.8,
	illuminanceAttraction: 0.75,
	illuminanceSecurity: 0.9
}
export let fullIntensity = {
	illuminanceElectricityCosts: 1,
	illuminanceAttraction: 1,
	illuminanceSecurity: 1
}

// SENSORTECHNIK
export let approximationAndLightSensor = {
	sensorTechElectricityCosts: 0.7,
	sensorTechAttraction: 0.7,
	sensorTechSecurity: 0.95
}
export let approximationSensor = {
	sensorTechElectricityCosts: 0.8,
	sensorTechAttraction: 0.8,
	sensorTechSecurity: 0.95
}
export let lightSensor = {
	sensorTechElectricityCosts: 0.9,
	sensorTechAttraction: 0.9,
	sensorTechSecurity: 1
}
