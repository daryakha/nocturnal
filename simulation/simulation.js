import "./lib/p5-1.4.1.js";
import { ParameterButtons } from "./ParameterButtons.js";
import { Button } from "./Button.js";
import { InaccessibleButton } from "./InaccessibleButton.js";
import { ParameterBox } from "./ParameterBox.js";
import { ParameterDescription } from "./ParameterDescription.js";
import { ConsultingBox } from "./ConsultingBox.js";
import { ScaleLabeling } from "./ScaleLabeling.js";
import { calculationValues, outputParameters, test, calculation } from "./Calculations.js";
import { updateData } from "./radarChart.js";

// size variables
let canvasWidth = 1920;
let canvasHeight = 1080;

// screen variables
let INTRO_SCREEN = 1;
let START_SCREEN = 2;
let DESCRIPTION_SCREEN = 3;
let TUTORIAL_SCREEN1 = 4;
let TUTORIAL_SCREEN2 = 5;
let TUTORIAL_SCREEN3 = 6;
let TUTORIAL_SCREEN4 = 7;
let TUTORIAL_SCREEN5 = 8;
let TUTORIAL_SCREEN6 = 9;
let TUTORIAL_SCREEN7 = 10;
let TUTORIAL_SCREEN8 = 11;
let SIMULATION_SCREEN = 12;
let DESCRIPTION_SCREEN2 = 13;
let END_SCREEN = 14;
let currentScreen = INTRO_SCREEN; // changes the beginning screen

// image variables
let introscreen;
let startscreen;
let descriptionscreen;
let tutorialscreen1;
let tutorialscreen2;
let tutorialscreen3;
let tutorialscreen4;
let tutorialscreen5;
let tutorialscreen6;
let tutorialscreen7;
let tutorialscreen8;
let simulationscreen;
let endscreen;

// interaction with buttons
let openLampenart = true;
let openLampenhoehe = false;
let openLaternenanzahl = false;
let openRichtcharakteristik = false;
let openLichtstaerke = false;
let openSensortechnik = false;

let openLedWarm = false;
let openLedCold = false;
let openNav = false;

let openThreeMeter = false;
let openSixMeter = false;
let openNineMeter = false;

let openHunderedLanterns = false;
let openTwoThousandLanterns = false;
let openSixteenThousandLanterns = false;

let openInsectfriendlyLight = false;
let openMushroomLight = false;
let openSuitcaseLight = false;

let openHalfIntensity = false;
let openFullIntensity = false;

let openApproximationAndLightSensor = false;
let openApproximationSensor = false;
let openLightSensor = false;

export let status = {
	everythingSelected: false,
};

//__INSTANCES___________________________________________________________________________________________________________________________

//START_SCREEN elements
let startButton = new Button(1300, 600, 260, 55, "Start", 24, function () { currentScreen = 4;});
let erklärungButton = new Button( 1300, 690, 260, 55, "Erklärung", 24, function () { currentScreen = DESCRIPTION_SCREEN; });

//DESCRIPTION_SCREEN elements
let zumPlanungstoolButton = new Button( 1320, 815, 230, 45, "zum Planungstool", 19, function () { currentScreen = 4; });

//TUTORIAL_SCREEN elements
let ohneTutorialButton = new Button( 717, 590, 230, 45, "ohne Tutorial fortfahren", 19, function () { currentScreen = SIMULATION_SCREEN; });
let jaButton = new Button(973, 590, 230, 45, "ja", 19, function () { currentScreen = currentScreen + 1; });
let zurückButton = new Button(1375, 989, 230, 45, "zurück", 19, function () { currentScreen = currentScreen - 1; });
let weiterButton = new Button(1639.5, 989, 230, 45, "weiter", 19, function () { currentScreen = currentScreen + 1; });
let weiterZurSimulationButton = new Button( 1639.5, 989, 230, 45, "weiter zur Simulation", 19, function () { currentScreen = SIMULATION_SCREEN; });

//SIMULATION_SCREEN elements
//parameter buttons
let lampenartButton = new ParameterButtons( 60, 135, "Lampenart", clickLampenart);
let lampenhoeheButton = new ParameterButtons( 370, 135, "Lampenhöhe", clickLampenhoehe);
let laternenanzahlButton = new ParameterButtons( 60, 221.5, "Laternenanzahl", clickLaternenanzahl);
let richtcharakteristikButton = new ParameterButtons( 370, 221.5, "Richtcharakteristik", clickRichtcharakteristik);
let lichtstaerkeButton = new ParameterButtons( 60, 310, "Lichtstärke", clickLichtstaerke);
let sensortechnikButton = new ParameterButtons( 370, 310, "Sensortechnik", clickSensortechnik);

//options
let ledWarmButton = new ParameterBox( 60, 511, 184, "LED warmweiß", 20, "3000 Kelvin\nkaum UV-Anteil\nStrom: 0,72 kwh/Tag\nAnschaffung: 120 Euro", 15, 165, clickLedWarm, "image_ledWarm", 62.5, 561, 179, 105);
let ledKaltButton = new ParameterBox( 266.5, 511, 184, "LED kaltweiß", 20, "6000 Kelvin\nmittlerer UV-Anteil\nStrom: 0,66 kwh/Tag\nAnschaffung: 120 Euro", 15, 165, clickLedCold, "image_ledCold", 269, 561, 179, 105);
let navButton = new ParameterBox( 471.5, 511, 184, "NAV", 20, "2000 Kelvin\nhoher UV-Anteil\nStrom: 1,05 kwh/Tag\nAnschaffung: 45 Euro", 15, 165, clickNav, "image_Nav", 474, 561, 179, 105);

let threeMeterButton = new ParameterBox( 60, 511, 184, "3 Meter", 20, "geringes Lichtvolumen\nkurze Lichtstrecke", 15, 185, clickThreeMeters, "image_threeMeter", 62.5, 561, 179, 110);
let sixMeterButton = new ParameterBox( 266.5, 511, 184, "6 Meter", 20, "mittleres Lichtvolumen\nlange Lichtstrecke", 15, 185, clickSixMeters, "image_sixMeter", 269, 568, 179, 110);
let nineMeterButton = new ParameterBox( 471.5, 511, 184, "9 Meter", 20, "großes Lichtvolumen\nsehr lange Lichtstrecke", 15, 185, clickNineMeters, "image_nineMeter", 474, 570, 179, 110);

let hundredLanternsButton = new ParameterBox( 60, 511, 184, "100 Laternen", 20, "Umrüstung einer Straße", 15, 185, clickHundredLanterns, "image_amount_100", 62.5, 565, 179, 120);
let twothousandLanternsButton = new ParameterBox( 266.5, 511, 184, "2.000 Laternen", 20, "Umrüstung eines\nStadtteils", 15, 185, clickTwoThousandLanterns, "image_amount_2000", 269, 565, 179, 120);
let sixteenthousandLanternsButton = new ParameterBox( 471.5, 511, 184, "16.000 Laternen", 20, "Umrüstung der Stadt", 15, 185, clickSixteenThousandLanterns, "image_amount_16000", 474, 565, 179, 120);

let insectfriendlyLightButton = new ParameterBox( 60, 511, 184, "Insektenfreundliche\nKofferleuchte", 18, "", 15, 460, clickInsectfriendlyLight, "image_insectfriendly_casing", 62.5, 610, 179, 80);
let mushroomLightButton = new ParameterBox( 266.5, 511, 184, "Pilzleuchte", 20, "", 15, 460, clickMushroomLight, "image_mushroom_casing", 269, 595, 179, 110);
let suitcaseLightButton = new ParameterBox( 471.5, 511, 184, "Kofferleuchte", 20, "", 15, 460, clickSuitcaseLight, "image_suitcase_casing", 474, 590, 179, 95);

let halfIntensityButton = new ParameterBox( 60, 511, 276, "Halbe Lichtstärke", 20, "", 15, 460, clickHalfIntensity, "image_half_intensity", 120, 580, 160, 145);
let fullIntensityButton = new ParameterBox( 370.5, 511, 276, "Volle Lichtstärke", 20, "", 15, 460, clickFullIntensity, "image_full_intensity", 435, 576, 150, 150);

let ApproximationAndLightSensorButton = new ParameterBox( 60, 511, 184, "Lichtsensor +\nAnnäherungssensor", 17, "", 15, 460, clickApproximationAndLightSensor, "image_approximation_and_lightsensor", 78, 600, 145, 110);
let approximationSensorButton = new ParameterBox( 266.5, 511, 184, "Annäherungssensor", 18, "", 15, 460, clickApproximationSensor, "image_approximationsensor", 318, 600, 112, 110);
let lightSensorButton = new ParameterBox( 471.5, 511, 184, "Lichtsensor", 20, "", 15, 460, clickLightSensor, "image_lightsensor", 495, 600, 148, 110);

// navigation buttons
let erklärungButton2 = new Button( 1629, 653, 230, 45, "Erklärung", 18, function () { currentScreen = DESCRIPTION_SCREEN2; });
let speichernButton = new InaccessibleButton( 1629, 708, 230, 45, "aktuellen Stand speichern", 18, function () {
	if (status.everythingSelected === true) {
	  currentScreen = END_SCREEN;
	}
});

// Labeling of scales
let scaleLabels = new ScaleLabeling(0, 0);
let endscreenScaleLabels = new ScaleLabeling(140, 154);

//END_SCREEN elements
let zurückZurSimulationButton = new Button( 60, 990, 230, 45, "zurück zur Simulation", 18, function () { currentScreen = SIMULATION_SCREEN; });

// parameter description
let lampenartDescription = new ParameterDescription(
  "Die Wahl der Lampe spielt eine entscheidende Rolle bei der Konfi-\nguration der Laterne. Je nachdem, für welche Beleuchtungstechnik man sich entscheidet, ändern sich die UV-Anteile der Lampe. Genau aus diesem Grund handelt es sich hierbei um den wichtigs-\nten Faktor für eine insektenfreundliche Straßenbeleuchtung.\n Je höher dieser Anteil ist, desto mehr Insekten werden angezogen. Außerdem macht die Wahl der Lampe den größten Anteil der Stromkosten aus. (Alle drei Lampenarten sind unter Vorbehalt gleicher Lichtausbeute gewählt worden.)"
);
let lampenhoeheDescription = new ParameterDescription(
  "Je höher die Masten der Laternen sind, desto mehr streut das Licht auf Flächen außerhalb der Wege und Straßen. Dadurch werden Insekten außerhalb der notwendig zu beleuchtenden Fläche an-\ngezogen.\nWenn möglich, soll die Masthöhe so klein wie möglich gehalten werden, um die Lichtverschmutzung und die Anziehung für Insekten so weit es geht zu umgehen. Die drei Auswahlmöglichkeiten wirken sich auf die Anlockwirkung aus und bestimmen ebenfalls die Licht-\nstärke direkt mit."
);
let laternenanzahlDescription = new ParameterDescription(
  "Hier kann die Anzahl der benötigten Straßenlaternen nach eigenem Ermessen frei konfiguriert werden. Es steht Ihnen individuell zur Verfügung, welche Ausmaße die Umrüstung der Laternen bean-\nsprucht.\n Grundsätzlich lässt sich natürlich sagen, dass sich sowohl die Lichtverschmutzung, als aber auch die Stromkosten bei steigender Anzahl der Lampen erhöhen. Dabei darf man den Sicherheitsaspekt nicht außer Acht lassen. Es ist daher wichtig, dass eine gute Aus-\nleuchtung der Straßen gewährleistet wird."
);
let richtcharakteristikDescription = new ParameterDescription(
  "Es ist wichtig, den Lichtkegel so klein wie möglich zu halten. Je mehr das Licht streut, desto größer ist das Lichtvolumen. Dies sind vermeidbare negative Auswirkungen, die durch zielgerichtete Aus-\nrichtung der Lampen reguliert werden können.\n Das Ziel ist es, die Lichtstreuung durch unterschiedliche Optionen der Winkeleinstellung gezielt zu lenken und somit die Anlockwirk-\nung so gering wie möglich zu halten. Die Richtcharakterisitik beein-\nflusst auch die Lampenhöhe und Lichtstärke, sowie die Verkehrs- und Allgemeine Sicherheit."
);
let lichtstaerkeDescription = new ParameterDescription(
  "Die Lichtstärke gibt Auskunft über die eingestellte Beleuchtungsin-\ntensität einer Leuchte. Es gibt die Möglichkeit, die Lampe herunter zu dimmen, um zum einen die Anlockwirkung auf Insekten, sowie auch die Stromkosten zu reduzieren.\n Man sollte hierbei auch den Faktor Sicherheit im Auge haben. Je dunkler die Straßenbeleuchtung wird, desto mehr leidet die allge-\nmeine Sicherheit auf den Straßen darunter."
);
let sensortechnikDescription = new ParameterDescription(
  "Durch Lichtsensorik sind Laternen nicht mehr zeitgebunden, sondern witterungsbedingt ein-, ausschalt- und dimmbar. Der An-\nnäherungssensor wirkt sich durch zielgerichteten Einsatz positiv auf Insekten, als auch auf Stromkosten aus. Es gibt eine Kombinations-\nmöglichkeit aus beiden Optionen.\n Die Sensortechnik steht im engen Zusammenhang mit Umbau- und Stromkosten, sowie der Verkehrs- und Allgemeinen Sicherheit. Richtig eingesetzt, wird die Sicherheit mit einer preiswerten Sensor-\nVariante auf einem optimalen Level gehalten."
);

// consulting text
let consultingLedWarm = new ConsultingBox("consulting_ledWarm");
let consultingLedKalt = new ConsultingBox("consulting_ledKalt");
let consultingNav = new ConsultingBox("consulting_nav");

let consultingThreeMeters = new ConsultingBox("consulting_threeMeters");
let consultingSixMeters = new ConsultingBox("consulting_sixMeters");
let consultingNineMeters = new ConsultingBox("consulting_nineMeters");

let consultingLanternAmount = new ConsultingBox("consulting_lanternAmount");

let consultingInsectfriendlyLight = new ConsultingBox("consulting_insectfriendlyLight");
let consultingMushroomLight = new ConsultingBox("consulting_mushroomLight");
let consultingSuitcaseLight = new ConsultingBox("consulting_suitcaseLight");

let consultingHalfIntensity = new ConsultingBox("consulting_halfIntensity");
let consultingFullIntensity = new ConsultingBox("consulting_fullIntensity");

let consultingApproximationAndLightSensor = new ConsultingBox("consulting_approximationAndLightSensor");
let consultingApproximationSensor = new ConsultingBox("consulting_approximationSensor");
let consultingLightSensor = new ConsultingBox("consulting_lightSensor");

function redrawButtons(p) {
  weiterButton.drawButton(p);
  weiterButton.clickedTest(p);
  zurückButton.drawButton(p);
  zurückButton.clickedTest(p);
}

//__FUNCTIONS________________________________________________________________________________________________________________________

function updateScreen(p) {
	p.image(simulationscreen, 0, 0, 1920, 1080);
	// parameter heading
	p.textAlign(p.CENTER, p.CENTER);
	p.textSize(25);
	p.fill("#ffffff");
	p.text("Parameter", 354.5, 69);
	// parameter buttons
	lampenartButton.drawButton(p);
	lampenhoeheButton.drawButton(p);
	laternenanzahlButton.drawButton(p);
	richtcharakteristikButton.drawButton(p);
	lichtstaerkeButton.drawButton(p);
	sensortechnikButton.drawButton(p);
	// navigation buttons
	erklärungButton2.drawButton(p);
	speichernButton.drawButton(p);
	//labels of scales
	if (openHunderedLanterns === true) {
		scaleLabels.drawLabel1(p);
	}
	if (openTwoThousandLanterns === true) {
		scaleLabels.drawLabel2(p);
	}
	if (openSixteenThousandLanterns === true) {
		scaleLabels.drawLabel3(p);
	}
}

function updateConsulting(p) {
  p.push();
  p.fill("#0d0042");
  p.noStroke();
  p.rect(724, 854, 1165, 180);
  p.pop();
}

function clickLampenart() {
  openLampenart = true;
  openLampenhoehe = false;
  openLaternenanzahl = false;
  openRichtcharakteristik = false;
  openLichtstaerke = false;
  openSensortechnik = false;
  console.log("Lampenart clicked");
}

function clickLampenhoehe() {
  openLampenhoehe = true;
  openLampenart = false;
  openLaternenanzahl = false;
  openRichtcharakteristik = false;
  openLichtstaerke = false;
  openSensortechnik = false;
  console.log("Lampenhöhe clicked");
}

function clickLaternenanzahl() {
  openLaternenanzahl = true;
  openLampenart = false;
  openLampenhoehe = false;
  openRichtcharakteristik = false;
  openLichtstaerke = false;
  openSensortechnik = false;
  console.log("Laternenanzahl clicked");
}

function clickRichtcharakteristik() {
  openRichtcharakteristik = true;
  openLampenart = false;
  openLampenhoehe = false;
  openLaternenanzahl = false;
  openLichtstaerke = false;
  openSensortechnik = false;
  console.log("Richtcharakteristik clicked");
}

function clickLichtstaerke() {
  openLichtstaerke = true;
  openLampenart = false;
  openLampenhoehe = false;
  openLaternenanzahl = false;
  openRichtcharakteristik = false;
  openSensortechnik = false;
  console.log("Lichtstärke clicked");
}

function clickSensortechnik() {
  openSensortechnik = true;
  openLampenart = false;
  openLampenhoehe = false;
  openLaternenanzahl = false;
  openRichtcharakteristik = false;
  openLichtstaerke = false;
  console.log("Sensortechnik clicked");
}

function clickLedWarm() {
	openLedWarm = true;
	openLedCold = false;
	openNav = false;
	console.log("LED warmweiß clicked");
	// setting values
	calculationValues.purchaseCosts =  120;//ledWarm.purchaseCosts;
	calculationValues.attractedInsects = 14965;//ledWarm.attractedInsects;
	calculationValues.electricityCostsPerLamp = 84;//ledWarm.electricityCostsPerLamp;
	calculationValues.lamptypeRoadSafety = 0.97;//ledWarm.lamptypeRoadSafety;
	// shows selected state
	lampenartButton.selectedButton();
	ledWarmButton.selectedButton();
	ledKaltButton.deactivateSelection();
	navButton.deactivateSelection();
	test();
}

function clickLedCold() {
	openLedWarm = false;
	openLedCold = true;
	openNav = false;
	console.log("LED kaltweiß clicked");
	// setting values
	calculationValues.purchaseCosts = 120;//ledCold.purchaseCosts;
	calculationValues.attractedInsects = 27375;//ledCold.attractedInsects;
	calculationValues.electricityCostsPerLamp = 77;//ledCold.electricityCostsPerLamp;
	calculationValues.lamptypeRoadSafety = 1;//ledCold.lamptypeRoadSafety;
	// shows selected state
	lampenartButton.selectedButton();
	ledWarmButton.deactivateSelection();
	ledKaltButton.selectedButton();
	navButton.deactivateSelection();	
}

function clickNav() {
	openLedWarm = false;
	openLedCold = false;
	openNav = true;
	console.log("NAV clicked");
	// setting values
	calculationValues.purchaseCosts = 45;//nav.purchaseCosts;
	calculationValues.attractedInsects = 59495;//nav.attractedInsects;
	calculationValues.electricityCostsPerLamp = 124;//nav.electricityCostsPerLamp;
	calculationValues.lamptypeRoadSafety = 0.94;//nav.lamptypeRoadSafety;
	// shows selected state
	lampenartButton.selectedButton();
	ledWarmButton.deactivateSelection();
	ledKaltButton.deactivateSelection();
	navButton.selectedButton();	
}

function clickThreeMeters() {
	openThreeMeter = true;
	openSixMeter = false;
	openNineMeter = false;
	console.log("3 Meter clicked");
	// setting values
	calculationValues.lampHeightAttraction = 0.8;//threeMeters.lampHeightAttraction;
	// shows selected state
	lampenhoeheButton.selectedButton();
	threeMeterButton.selectedButton();
	sixMeterButton.deactivateSelection();
	nineMeterButton.deactivateSelection();
}

function clickSixMeters() {
	openThreeMeter = false;
	openSixMeter = true;
	openNineMeter = false;
	console.log("6 Meter clicked");
	// setting values
	calculationValues.lampHeightAttraction = 1;//sixMeters.lampHeightAttraction;
	// shows selected state
	lampenhoeheButton.selectedButton();
	threeMeterButton.deactivateSelection();
	sixMeterButton.selectedButton();
	nineMeterButton.deactivateSelection();
}

function clickNineMeters() {
	openThreeMeter = false;
	openSixMeter = false;
	openNineMeter = true;
	console.log("9 Meter clicked");
	// setting values
	calculationValues.lampHeightAttraction = 1.3;//nineMeters.lampHeightAttraction;
	// shows selected state
	lampenhoeheButton.selectedButton();
	threeMeterButton.deactivateSelection();
	sixMeterButton.deactivateSelection();
	nineMeterButton.selectedButton();
}

function clickHundredLanterns() {
	openHunderedLanterns = true;
	openTwoThousandLanterns = false;
	openSixteenThousandLanterns = false;
	console.log("100 Laternen clicked");
	// setting values
	calculationValues.lanternAmount = 100;//street.lanternAmount;
	// shows selected state
	laternenanzahlButton.selectedButton();
	hundredLanternsButton.selectedButton();
	twothousandLanternsButton.deactivateSelection();
	sixteenthousandLanternsButton.deactivateSelection();
}

function clickTwoThousandLanterns() {
	openHunderedLanterns = false;
	openTwoThousandLanterns = true;
	openSixteenThousandLanterns = false;
	console.log("2000 Laternen clicked");
	// setting values
	calculationValues.lanternAmount = 2000;//area.lanternAmount;
	// shows selected state
	laternenanzahlButton.selectedButton();
	hundredLanternsButton.deactivateSelection();
	twothousandLanternsButton.selectedButton();
	sixteenthousandLanternsButton.deactivateSelection();
}

function clickSixteenThousandLanterns() {
	openHunderedLanterns = false;
	openTwoThousandLanterns = false;
	openSixteenThousandLanterns = true;
	console.log("16000 Laternen clicked");
	// setting values
	calculationValues.lanternAmount = 16000;//city.lanternAmount;
	// shows selected state
	laternenanzahlButton.selectedButton();
	hundredLanternsButton.deactivateSelection();
	twothousandLanternsButton.deactivateSelection();
	sixteenthousandLanternsButton.selectedButton();
}

function clickInsectfriendlyLight() {
	openInsectfriendlyLight = true;
	openMushroomLight = false;
	openSuitcaseLight = false;
	console.log("Insektenfreundliche Kofferleuchte clicked");
	// setting values
	calculationValues.polarPatternAttraction = 0.8;//insectfriendlyLight.polarPatternAttraction;
	calculationValues.polarPatternRoadSafety = 0.97;//insectfriendlyLight.polarPatternRoadSafety;
	calculationValues.polarPatternSecurity = 0.95;//insectfriendlyLight.polarPatternSecurity;
	// shows selected state
	richtcharakteristikButton.selectedButton();
	insectfriendlyLightButton.selectedButton();
	mushroomLightButton.deactivateSelection();
	suitcaseLightButton.deactivateSelection();
}

function clickMushroomLight() {
	openInsectfriendlyLight = false;
	openMushroomLight = true;
	openSuitcaseLight = false;
	console.log("Pilzleuchte clicked");
	// setting values
	calculationValues.polarPatternAttraction = 1;//mushroomLight.polarPatternAttraction;
	calculationValues.polarPatternRoadSafety = 0.99;//mushroomLight.polarPatternRoadSafety;
	calculationValues.polarPatternSecurity = 0.99;//mushroomLight.polarPatternSecurity;
	// shows selected state
	richtcharakteristikButton.selectedButton();
	insectfriendlyLightButton.deactivateSelection();
	mushroomLightButton.selectedButton();
	suitcaseLightButton.deactivateSelection();
}

function clickSuitcaseLight() {
	openInsectfriendlyLight = false;
	openMushroomLight = false;
	openSuitcaseLight = true;
	console.log("Kofferleuchte clicked");
	// setting values
	calculationValues.polarPatternAttraction = 1.1;//suitcaseLight.polarPatternAttraction;
	calculationValues.polarPatternRoadSafety = 1;//suitcaseLight.polarPatternRoadSafety;
	calculationValues.polarPatternSecurity = 1;//suitcaseLight.polarPatternSecurity;
	// shows selected state
	richtcharakteristikButton.selectedButton();
	insectfriendlyLightButton.deactivateSelection();
	mushroomLightButton.deactivateSelection();
	suitcaseLightButton.selectedButton();
}

function clickHalfIntensity() {
	openHalfIntensity = true;
	openFullIntensity = false;
	console.log("Halbe Lichtstärke clicked");
	// setting values
	calculationValues.illuminanceElectricityCosts = 0.8;//halfIntensity.illuminanceElectricityCosts;
	calculationValues.illuminanceAttraction = 0.75;//halfIntensity.illuminanceAttraction;
	calculationValues.illuminanceSecurity = 0.9;//halfIntensity.illuminanceSecurity;
	// shows selected state
	lichtstaerkeButton.selectedButton();
	halfIntensityButton.selectedButton();
	fullIntensityButton.deactivateSelection();
}

function clickFullIntensity() {
	openHalfIntensity = false;
	openFullIntensity = true;
	console.log("Volle Lichtstärke clicked");
	// setting values
	calculationValues.illuminanceElectricityCosts = 1;//fullIntensity.illuminanceElectricityCosts;
	calculationValues.illuminanceAttraction = 1;//fullIntensity.illuminanceAttraction;
	calculationValues.illuminanceSecurity = 1;//fullIntensity.illuminanceSecurity;
	// shows selected state
	lichtstaerkeButton.selectedButton();
	halfIntensityButton.deactivateSelection();
	fullIntensityButton.selectedButton();
}

function clickApproximationAndLightSensor() {
	openApproximationAndLightSensor = true;
	openApproximationSensor = false;
	openLightSensor = false;
	console.log("Lichtsensor + Annäherungssensor clicked");
	// setting values
	calculationValues.sensorTechElectricityCosts = 0.7;//approximationAndLightSensor.sensorTechElectricityCosts;
	calculationValues.sensorTechAttraction = 0.7;//approximationAndLightSensor.sensorTechAttraction;
	calculationValues.sensorTechSecurity = 0.95;//approximationAndLightSensor.sensorTechSecurity;
	// shows selected state
	sensortechnikButton.selectedButton();
	ApproximationAndLightSensorButton.selectedButton();
	approximationSensorButton.deactivateSelection();
	lightSensorButton.deactivateSelection();
}

function clickApproximationSensor() {
	openApproximationAndLightSensor = false;
	openApproximationSensor = true;
	openLightSensor = false;
	console.log("Annäherungssensor clicked");
	// setting values
	calculationValues.sensorTechElectricityCosts = 0.8;//approximationSensor.sensorTechElectricityCosts;
	calculationValues.sensorTechAttraction = 0.8;//approximationSensor.sensorTechAttraction;
	calculationValues.sensorTechSecurity = 0.95;//approximationSensor.sensorTechSecurity;
	// shows selected state
	sensortechnikButton.selectedButton();
	ApproximationAndLightSensorButton.deactivateSelection();
	approximationSensorButton.selectedButton();
	lightSensorButton.deactivateSelection();
}

function clickLightSensor() {
	openApproximationAndLightSensor = false;
	openApproximationSensor = false;
	openLightSensor = true;
	console.log("Lichtsensor clicked");
	// setting values
	calculationValues.sensorTechElectricityCosts = 0.9;//lightSensor.sensorTechElectricityCosts;
	calculationValues.sensorTechAttraction = 0.9;//lightSensor.sensorTechAttraction;
	calculationValues.sensorTechSecurity = 1;//lightSensor.sensorTechSecurity;
	// shows selected state
	sensortechnikButton.selectedButton();
	ApproximationAndLightSensorButton.deactivateSelection();
	approximationSensorButton.deactivateSelection();
	lightSensorButton.selectedButton();
}

function startCalculation(p) {
	if ((openLedWarm === true || openLedCold === true || openNav === true) && (openThreeMeter === true || openSixMeter === true || openNineMeter === true) && (openHunderedLanterns === true || openTwoThousandLanterns === true || openSixteenThousandLanterns === true) && (openInsectfriendlyLight === true || openMushroomLight === true || openSuitcaseLight === true) && (openHalfIntensity === true || openFullIntensity === true) && (openApproximationAndLightSensor === true || openApproximationSensor === true || openLightSensor === true)) {
		status.everythingSelected = true;
		calculation(p);
		updateData();
		speichernButton.activateButton(); // makes speichernButton accessible
		const overlay = document.getElementById("overlay"); // makes the overlay disappear
		overlay.style.opacity = "0";
	}
}

//______________________________________________________________________________________________________________________________________

const mainSketch = function (p) {
	p.preload = function () {
		introscreen = p.loadImage("./images/intro_screen.png");
		startscreen = p.loadImage("./images/start_screen.png");
		descriptionscreen = p.loadImage("./images/description_screen.png");
		simulationscreen = p.loadImage("./images/simulation_screen.png");
		tutorialscreen1 = p.loadImage("./images/tutorial_screen1.png");
		tutorialscreen2 = p.loadImage("./images/tutorial_screen2.png");
		tutorialscreen3 = p.loadImage("./images/tutorial_screen3.png");
		tutorialscreen4 = p.loadImage("./images/tutorial_screen4.png");
		tutorialscreen5 = p.loadImage("./images/tutorial_screen5.png");
		tutorialscreen6 = p.loadImage("./images/tutorial_screen6.png");
		tutorialscreen7 = p.loadImage("./images/tutorial_screen7.png");
		tutorialscreen8 = p.loadImage("./images/tutorial_screen8.png");
		endscreen = p.loadImage("./images/end_screen.png");
		ConsultingBox.preload(p);
		ParameterBox.preload(p);
	};

	p.setup = function () {
		p.createCanvas(canvasWidth, canvasHeight);
  	};

  	p.draw = function () {
		if (currentScreen === INTRO_SCREEN) {
		  	p.image(introscreen, 0, 0, 1920, 1080);
		  	if (p.frameCount > 150) {
				currentScreen = START_SCREEN; // changing to START_SCREEN after 150 frames
		  	}
		}
		if (currentScreen === START_SCREEN) {
			p.image(startscreen, 0, 0, 1920, 1080);
			// draw everything interactive on the screen
			startButton.drawButton(p);
			erklärungButton.drawButton(p);
			// make buttons clickable
			erklärungButton.clickedTest(p);
			startButton.clickedTest(p);
		}
		if (currentScreen === DESCRIPTION_SCREEN) {
		  	p.image(descriptionscreen, 0, 0, 1920, 1080);
		  	const radarChart = document.getElementById("myChart");
		  	radarChart.style.opacity = "0";
		  	zumPlanungstoolButton.drawButton(p);
		  	zumPlanungstoolButton.clickedTest(p);
		}
		if (currentScreen === 4) {
		  	// TUTORIAL_SCREEN1
		  	p.image(tutorialscreen1, 0, 0, 1920, 1080);
		  	ohneTutorialButton.drawButton(p);
		  	jaButton.drawButton(p);
		  	ohneTutorialButton.clickedTest(p);
		  	jaButton.clickedTest(p);
		}
		if (currentScreen === 5) {
		 	// TUTORIAL_SCREEN2
		 	p.image(tutorialscreen2, 0, 0, 1920, 1080);
		 	redrawButtons(p);
		}	
		if (currentScreen === 6) {
		  	// TUTORIAL_SCREEN3
		  	p.image(tutorialscreen3, 0, 0, 1920, 1080);
		  	redrawButtons(p);
		}
		if (currentScreen === 7) {
		  	// TUTORIAL_SCREEN4
		  	p.image(tutorialscreen4, 0, 0, 1920, 1080);
		  	redrawButtons(p);
		}
		if (currentScreen === 8) {
		  	// TUTORIAL_SCREEN5
		  	p.image(tutorialscreen5, 0, 0, 1920, 1080);
		  	redrawButtons(p);
		}
		if (currentScreen === 9) {
		  	// TUTORIAL_SCREEN6
		  	p.image(tutorialscreen6, 0, 0, 1920, 1080);
		  	redrawButtons(p);
		}
		if (currentScreen === 10) {
		  	// TUTORIAL_SCREEN7
		  	p.image(tutorialscreen7, 0, 0, 1920, 1080);
		  	redrawButtons(p);
		}
		if (currentScreen === 11) {
		  	// TUTORIAL_SCREEN8
		  	p.image(tutorialscreen8, 0, 0, 1920, 1080);
		  	weiterZurSimulationButton.drawButton(p);
		  	weiterZurSimulationButton.clickedTest(p);
		}
		if (currentScreen === SIMULATION_SCREEN) {
			updateScreen(p);
			const radarChart = document.getElementById("myChart"); // makes html element radar chart visible
			radarChart.style.opacity = "1";
			const overlay = document.getElementById("overlay"); // makes overlay for the radar chart visible and sets right position after coming back from the END_SCREEN
			overlay.style.opacity = "1";
			radarChart.style.top = "10px";
			radarChart.style.left = "760px";
			// make parameter buttons clickable
			erklärungButton2.clickedTest(p);
			speichernButton.clickedTest(p);
			lampenartButton.clickedTest(p);
			lampenhoeheButton.clickedTest(p);
			laternenanzahlButton.clickedTest(p);
			richtcharakteristikButton.clickedTest(p);
			lichtstaerkeButton.clickedTest(p);
			sensortechnikButton.clickedTest(p);	

			if (openLampenart === true) {
				updateScreen(p);
				p.textAlign(p.CENTER, p.CENTER);
				p.textSize(25);
				p.fill("#ffffff");
				p.text("Lampenart", 354.5, 444); 
				ledWarmButton.drawBox(p);
				ledWarmButton.drawImage(p);
				ledKaltButton.drawBox(p);
				ledKaltButton.drawImage(p);
				navButton.drawBox(p);
				navButton.drawImage(p);
				lampenartDescription.draw(p);
				// make parameter boxes clickable
				ledWarmButton.clickedTest(p);
				ledKaltButton.clickedTest(p);
				navButton.clickedTest(p);
				if (openLedWarm === true) {
					updateConsulting(p);
					consultingLedWarm.draw(p);
				}
				if (openLedCold === true) {
					updateConsulting(p);
					consultingLedKalt.draw(p);
				}
				if (openNav === true) {
					updateConsulting(p);
					consultingNav.draw(p);
				}
			}	
			if (openLampenhoehe === true) {
				updateScreen(p);
				p.textAlign(p.CENTER, p.CENTER);
				p.textSize(25);
				p.fill("#ffffff");
				p.text("Lampenhöhe", 354.5, 444);
				threeMeterButton.drawBox(p);
				threeMeterButton.drawImage(p);
				sixMeterButton.drawBox(p);
				sixMeterButton.drawImage(p);
				nineMeterButton.drawBox(p);
				nineMeterButton.drawImage(p);
				lampenhoeheDescription.draw(p);
				// make parameter boxes clickable
				threeMeterButton.clickedTest(p);
				sixMeterButton.clickedTest(p);
				nineMeterButton.clickedTest(p);
				if (openThreeMeter === true) {
					updateConsulting(p);
					consultingThreeMeters.draw(p);
				}
				if (openSixMeter === true) {
					updateConsulting(p);
					consultingSixMeters.draw(p);
				}
				if (openNineMeter === true) {
					updateConsulting(p);
					consultingNineMeters.draw(p);
				}
			}
			if (openLaternenanzahl === true) {
				updateScreen(p);
				p.textAlign(p.CENTER, p.CENTER);
				p.textSize(25);
				p.fill("#ffffff");
				p.text("Laternenanzahl", 354.5, 444);
				hundredLanternsButton.drawBox(p);
				hundredLanternsButton.drawImage(p);
				twothousandLanternsButton.drawBox(p);
				twothousandLanternsButton.drawImage(p);
				sixteenthousandLanternsButton.drawBox(p);
				sixteenthousandLanternsButton.drawImage(p);
				// make parameter boxes clickable
				hundredLanternsButton.clickedTest(p);
				twothousandLanternsButton.clickedTest(p);
				sixteenthousandLanternsButton.clickedTest(p);
				laternenanzahlDescription.draw(p);
				consultingLanternAmount.draw(p);
			}
			if (openRichtcharakteristik === true) {
				updateScreen(p);
				p.textAlign(p.CENTER, p.CENTER);
				p.textSize(25);
				p.fill("#ffffff");
				p.text("Richtcharakteristik", 354.5, 444);
				insectfriendlyLightButton.drawBox(p);
				insectfriendlyLightButton.drawImage(p);
				mushroomLightButton.drawBox(p);
				mushroomLightButton.drawImage(p);
				suitcaseLightButton.drawBox(p);
				suitcaseLightButton.drawImage(p);
				richtcharakteristikDescription.draw(p);
				// make parameter boxes clickable
				insectfriendlyLightButton.clickedTest(p);
				mushroomLightButton.clickedTest(p);
				suitcaseLightButton.clickedTest(p);
				if (openInsectfriendlyLight === true) {
					updateConsulting(p);
					consultingInsectfriendlyLight.draw(p);
				}
				if (openMushroomLight === true) {
					updateConsulting(p);
					consultingMushroomLight.draw(p);
				}
				if (openSuitcaseLight === true) {
					updateConsulting(p);
					consultingSuitcaseLight.draw(p);
				}
			}
			if (openLichtstaerke === true) {
				updateScreen(p);
				p.textAlign(p.CENTER, p.CENTER);
				p.textSize(25);
				p.fill("#ffffff");
				p.text("Lichtstärke", 354.5, 444);
				halfIntensityButton.drawBox(p);
				halfIntensityButton.drawImage(p);
				fullIntensityButton.drawBox(p);
				fullIntensityButton.drawImage(p);
				lichtstaerkeDescription.draw(p);
				// make parameter boxes clickable
				halfIntensityButton.clickedTest(p);
				fullIntensityButton.clickedTest(p);
				if (openHalfIntensity === true) {
					updateConsulting(p);
					consultingHalfIntensity.draw(p);
				}
				if (openFullIntensity === true) {
					updateConsulting(p);
					consultingFullIntensity.draw(p);
				}
			}
			if (openSensortechnik === true) {
				updateScreen(p);
				p.textAlign(p.CENTER, p.CENTER);
				p.textSize(25);
				p.fill("#ffffff");
				p.text("Sensortechnik", 354.5, 444);
				ApproximationAndLightSensorButton.drawBox(p);
				ApproximationAndLightSensorButton.drawImage(p);
				approximationSensorButton.drawBox(p);
				approximationSensorButton.drawImage(p);
				lightSensorButton.drawBox(p);
				lightSensorButton.drawImage(p);
				sensortechnikDescription.draw(p);
				// make parameter boxes clickable
				ApproximationAndLightSensorButton.clickedTest(p);
				approximationSensorButton.clickedTest(p);
				lightSensorButton.clickedTest(p);
				if (openApproximationAndLightSensor === true) {
					updateConsulting(p);
					consultingApproximationAndLightSensor.draw(p);
				}
				if (openApproximationSensor === true) {
					updateConsulting(p);
					consultingApproximationSensor.draw(p);
				}
				if (openLightSensor === true) {
					updateConsulting(p);
					consultingLightSensor.draw(p);
				}	
			}
		}
		if (currentScreen === DESCRIPTION_SCREEN2) {
			p.image(descriptionscreen, 0, 0, 1920, 1080);
			const radarChart = document.getElementById("myChart"); // makes radar chart dissappear
			radarChart.style.opacity = "0";
			const overlay = document.getElementById("overlay"); // makes overlay for the radar chart disappear
			overlay.style.opacity = "0";
			zurückZurSimulationButton.drawButton(p);
			zurückZurSimulationButton.clickedTest(p);
		}
		if (currentScreen === END_SCREEN) {
			p.image(endscreen, 0, 0, 1920, 1080);
			const radarChart = document.getElementById("myChart"); // new position for the radar chart
			radarChart.style.left = "900px";
			radarChart.style.top = "165px";
			endscreenScaleLabels.drawLabel1
			//labels of scales
			if (openHunderedLanterns === true) {
				endscreenScaleLabels.drawLabel1(p);
			}
			if (openTwoThousandLanterns === true) {
				endscreenScaleLabels.drawLabel2(p);
			}
			if (openSixteenThousandLanterns === true) {
				endscreenScaleLabels.drawLabel3(p);
			}			
			p.noStroke();
			// output for "Parameter"
			if (openLedWarm === true) {
				p.fill('#ffffff');
				p.rect(370, 270, 300, 40);
				p.fill('#000000');
				p.text("LED warmweiß", 374, 281);
			} if (openLedCold === true) {
				p.fill('#ffffff');
				p.rect(370, 270, 300, 40);
				p.fill('#000000');
				p.text("LED kaltweiß", 374, 281);
			} if (openNav === true) {
				p.fill('#ffffff');
				p.rect(370, 270, 300, 40);
				p.fill('#000000');
				p.text("NAV", 374, 281);
			}
			if (openThreeMeter === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5, 300, 40);
				p.fill('#000000');
				p.text("3 Meter", 374, 281 + 40.5);
			} if (openSixMeter === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5, 300, 40);
				p.fill('#000000');
				p.text("6 Meter", 374, 281 + 40.5);
			} if (openNineMeter === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5, 300, 40);
				p.fill('#000000');
				p.text("9 Meter", 374, 281 + 40.5);
			}
			if (openHunderedLanterns === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 2, 300, 40);
				p.fill('#000000');
				p.text("100", 374, 281 + 40.5 * 2);
			} if (openTwoThousandLanterns === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 2, 300, 40);
				p.fill('#000000');
				p.text("2000", 374, 281 + 40.5 * 2);
			} if (openSixteenThousandLanterns === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 2, 300, 40);
				p.fill('#000000');
				p.text("16000", 374, 281 + 40.5 * 2);
			}
			if (openInsectfriendlyLight === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 3, 300, 40);
				p.fill('#000000');
				p.text("insektenfreundliche Kofferleuchte", 374, 281 + 40.5 * 3);
			} if (openMushroomLight === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 3, 300, 40);
				p.fill('#000000');
				p.text("Pilzleuchte", 374, 281 + 40.5 * 3);
			} if (openSuitcaseLight === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 3, 300, 40);
				p.fill('#000000');
				p.text("Kofferleuchte", 374, 281 + 40.5 * 3);
			}
			if (openHalfIntensity === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 4, 300, 40);
				p.fill('#000000');
				p.text("50 %", 374, 281 + 40.5 * 4);
			} if (openFullIntensity === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 4, 300, 40);
				p.fill('#000000');
				p.text("100 %", 374, 281 + 40.5 * 4);
			}
			if (openApproximationAndLightSensor === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 5, 300, 40);
				p.fill('#000000');
				p.text("Lichtsensor & Annäherungssensor", 374, 281 + 40.5 * 5);
			} if (openApproximationSensor === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 5, 300, 40);
				p.fill('#000000');
				p.text("Annäherungssensor", 374, 281 + 40.5 * 5);
			} if (openLightSensor === true) {
				p.fill('#ffffff');
				p.rect(370, 270 + 40.5 * 5, 300, 40);
				p.fill('#000000');
				p.text("Lichtsensor", 374, 281 + 40.5 * 5);
			}
			// output for "Auswirkungen"
			p.text(outputParameters.electricityCosts + " Euro / Jahr", 374, 677);
			p.text(outputParameters.conversionCosts + " Euro", 374, 677 + 40.5);
			p.text(outputParameters.dyingInsects + " Insekten / Jahr", 374, 677 + 40.5 * 2);
			p.text(outputParameters.roadSafety + " %", 374, 677 + 40.5 * 3);
			p.text(outputParameters.security + " %", 374, 677 + 40.5 * 4);
		
			zurückZurSimulationButton.drawButton(p);
			zurückZurSimulationButton.clickedTest(p);
		}
		startCalculation(p);
  	};
};

new p5(mainSketch, document.getElementById("simulationCanvasConatiner"));
