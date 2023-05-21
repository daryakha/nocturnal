import { Button } from "./Button.js";

export class ParameterButtons extends Button {
	constructor(x, y, content, onClick) {
		super();
		this.x = x;
		this.y = y;
		this.width = 276;
		this.height = 63;
		this.content = content;
		this.onClick = onClick;
		this.buttonColour = "#ccdadb";
		this.selectedButtonColour = "#e21a56";
		this.textColour = "#000000";
		this.selectedTextColour = "#ffffff";
	}
	drawButton(p) {
		p.push();
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER); 
		p.translate(this.x, this.y);
		// hover effect
		if (this.hitTest(p)) {  
			p.fill(this.selectedButtonColour);
		} else {
			p.fill("#ffffff");
		}
		// button shadow
		p.rect( 6, 6, this.width, this.height, 10);
		p.fill(this.buttonColour);
		// button 
		p.rect( 0, 0, this.width, this.height, 10);
		p.fill(this.textColour);
		// text content
		p.textSize(22);
		p.text(this.content, this.width/2, this.height/2);
		p.pop();
	}
	selectedButton() {
		this.buttonColour = this.selectedButtonColour;
		this.textColour = this.selectedTextColour;
	}
}