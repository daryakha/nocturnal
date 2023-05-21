import { Button } from "./Button.js";

export class InaccessibleButton extends Button {
	constructor(x, y, width, height, content, textSize, onClick) {
		super();
        this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.textSize = textSize;
		this.content = content;
		this.onClick = onClick;
		this.buttonColour = "#ccdadb";
	}
	
	activateButton() {
		this.buttonColour = "#ffffff";
	}
}