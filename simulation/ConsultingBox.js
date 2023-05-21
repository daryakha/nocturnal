export class ConsultingBox {
	// Lampenart
	static consulting_ledWarm;
	static consulting_ledKalt;
	static consulting_nav;
	// Lampenhöhe
	static consulting_threeMeters;
	static consulting_sixMeters;
	static consulting_nineMeters;
	// Laternenanzahl
	static consulting_lanternAmount;
	// Richtcharakteristik
	static consulting_insectfriendlyLight;
	static consulting_mushroomLight;
	static consulting_suitcaseLight;
	// Lichtstärke
	static consulting_halfIntensity;
	static consulting_fullIntensity;
	// Sensortechnik
	static consulting_lightAndApproximationSensor;
	static consulting_approximationSensor;
	static consulting_lightSensor;

	constructor(content) {
		this.x = 724;
		this.y = 854;
		this.content = content;
	}
	draw(p) {
		p.image(ConsultingBox[this.content], this.x, this.y);
	}
	static preload(p) {
		ConsultingBox.consulting_ledWarm = p.loadImage("./images/consulting_ledWarm.png");
		ConsultingBox.consulting_ledKalt = p.loadImage("./images/consulting_ledKalt.png");
		ConsultingBox.consulting_nav = p.loadImage("./images/consulting_nav.png");

		ConsultingBox.consulting_threeMeters = p.loadImage("./images/consulting_dreiMeter.png");
		ConsultingBox.consulting_sixMeters = p.loadImage("./images/consulting_sechsMeter.png");
		ConsultingBox.consulting_nineMeters = p.loadImage("./images/consulting_neunMeter.png");

		ConsultingBox.consulting_lanternAmount = p.loadImage("./images/consulting_laternenanzahl.png");

		ConsultingBox.consulting_insectfriendlyLight = p.loadImage("./images/consulting_insektenfreundlicheKofferleuchte.png");
		ConsultingBox.consulting_mushroomLight = p.loadImage("./images/consulting_pilzleuchte.png");
		ConsultingBox.consulting_suitcaseLight = p.loadImage("./images/consulting_kofferleuchte.png");

		ConsultingBox.consulting_halfIntensity = p.loadImage("./images/consulting_halbeLichtstärke.png");
		ConsultingBox.consulting_fullIntensity = p.loadImage("./images/consulting_volleLichtstärke.png");

		ConsultingBox.consulting_approximationAndLightSensor = p.loadImage("./images/consulting_lichtUndAnnäherungsSensor.png");
		ConsultingBox.consulting_approximationSensor = p.loadImage("./images/consulting_annäherungsSensor.png");
		ConsultingBox.consulting_lightSensor = p.loadImage("./images/consulting_lichtSensor.png");
	}
}
