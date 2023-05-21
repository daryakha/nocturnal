// source: https://www.youtube.com/watch?v=hES4Pj6pDCM
let timestampClick = Date.now(); // sets a timestamp with the number of milliseconds that has passed since Jan 1, 1970 12:00:00

export class Button {
	constructor(x, y, width, height, content, textSize, onClick) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.textSize = textSize;
		this.content = content;
		this.onClick = onClick;
		this.buttonColour = "#FFFFFF";
	}

	drawButton(p) {
		p.push();
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER);
		p.translate(this.x, this.y);
		p.fill(this.buttonColour)
		p.rect( 0, 0, this.width, this.height, 10);
		p.fill("#000000");
		//hover effect
		p.push();
		if (this.hitTest(p)) {
			//hover effect
			p.strokeWeight(4);
			p.stroke("#e21a56");
			p.noFill();
			p.rect(0, 0, this.width, this.height, 10);
		}
		p.pop();
		// text content
		p.textSize(this.textSize);
		//p.textFont(Button.firaSansSemiBold);
		p.text(this.content, this.width / 2, this.height / 2 + 1);
		p.pop();
	}
	hitTest(p) {
		if (
			p.mouseX >= this.x &&
			p.mouseX < this.x + this.width &&
			p.mouseY >= this.y &&
			p.mouseY <= this.y + this.height
		) {
			return true;
		} else {
			return false;
		}
	}
	clickedTest(p) {
		if (
			this.hitTest(p) &&
			p.mouseIsPressed &&
			timestampClick + 200 < Date.now()
		) {
			// the last click is supposed to be 200ms ago
			console.log("clicked");
			this.onClick();
			timestampClick = Date.now(); // sets new timestamp of the click, so that the next click can only happen after 200ms
			console.log(timestampClick);
		}
	}
}
