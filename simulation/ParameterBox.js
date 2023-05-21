import { Button } from "./Button.js";

export class ParameterBox extends Button {
	// Lampenart
	static image_ledWarm;
	static image_ledCold;
	static image_Nav;
	// Lampenhöhe
	static image_threeMeter;
	static image_sixMeter;
	static image_nineMeter;
	// Laternenanzahl
	static image_amount_100;
	static image_amount_2000;
	static image_amount_16000;
	// Richtcharakteristik
	static image_insectfriendly_casing;
	static image_mushroom_casing;
	static image_suitcase_casing;
	// Lichtstärke
	static image_half_intensity;
	static image_full_intensity;
	// Sensortechnik
	static image_approximation_and_lightsensor;       
	static image_approximationsensor;
	static image_lightsensor;

	constructor(x, y, width, title, textSizeTitle, content, textSizeContent, textY, onClick, image, imageX, imageY, imageWidth, imageHeight) {
		super();
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = 246.5;
		this.title = title;
		this.textSizeTitle = textSizeTitle;
		this.content = content;
		this.textSizeContent = textSizeContent;
		this.textY = textY;
		this.onClick = onClick;
		this.image = image;
		this.imageX = imageX;
		this.imageY = imageY;
		this.imageWidth = imageWidth;
		this.imageHeight = imageHeight;
		this.strokeColour = "#ccdadb";
		this.selectedStrokeColour = "#e21a56";

	}
	drawBox(p) {
		p.push();
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER);
		p.translate(this.x,this.y);
		// box
		p.fill("#ffffff");
		p.rect( 0, 50, this.width, this.height - 50, 0, 0, 20, 20);
		p.fill( 255, 255, 255, 110); // text background (for hover animation)
		p.rect( 0, 0, this.width, this.height, 25);        
		p.push();    
		// hover effect 
		if (this.hitTest(p)) {           
			p.stroke(this.selectedStrokeColour);
		} else {
			p.stroke(this.strokeColour);
		}
		// outline (for hover animation)
		p.strokeWeight(5);
		p.fill( 255, 255, 255, 0);
		p.rect( 0, 0, this.width, this.height, 25);	
		p.pop();
		// title
		p.fill("#000000"); 
		p.textSize(this.textSizeTitle);
		p.text(this.title, this.width/2, this.height - 218);
		// text content
		p.textAlign(p.LEFT, p.TOP);
		p.textSize(this.textSizeContent);
		p.text(this.content, this.width - 170, this.textY);
		p.pop();
	}
	drawImage(p){
		p.image(ParameterBox[this.image],this.imageX, this.imageY, this.imageWidth, this.imageHeight);
	}
	selectedButton() {
		this.strokeColour = this.selectedStrokeColour;
	}
	deactivateSelection() {
		this.strokeColour = "#ccdadb";
	}
	static preload(p) {
		ParameterBox.image_ledWarm = p.loadImage ("./images/led-warm.PNG");
		ParameterBox.image_ledCold = p.loadImage ("./images/led-cold.PNG");
		ParameterBox.image_Nav = p.loadImage ("./images/nav.PNG");
		ParameterBox.image_threeMeter = p.loadImage ("./images/3-meter.PNG");
		ParameterBox.image_sixMeter = p.loadImage ("./images/6-meter.PNG");
		ParameterBox.image_nineMeter = p.loadImage ("./images/9-meter.PNG");
		ParameterBox.image_amount_100 = p.loadImage ("./images/100-Laternen.PNG");
		ParameterBox.image_amount_2000 = p.loadImage ("./images/2000-laternen.PNG");
		ParameterBox.image_amount_16000 = p.loadImage ("./images/16000-laternen.PNG");
		ParameterBox.image_insectfriendly_casing = p.loadImage ("./images/moderne-kofferleuchte.PNG");
		ParameterBox.image_mushroom_casing= p.loadImage ("./images/pilzleuchte.PNG");
		ParameterBox.image_suitcase_casing = p.loadImage ("./images/kofferleuchte.PNG");
		ParameterBox.image_half_intensity = p.loadImage ("./images/halbe_lichtstärke.PNG");
		ParameterBox.image_full_intensity = p.loadImage ("./images/volle_lichtstärke.PNG");
		ParameterBox.image_approximation_and_lightsensor = p.loadImage ("./images/licht+annäherungssensor.PNG");
		ParameterBox.image_approximationsensor = p.loadImage ("./images/annäherungssensor.PNG");
		ParameterBox.image_lightsensor = p.loadImage ("./images/lichtsensor.PNG");
	}
}