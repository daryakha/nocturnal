export class ScaleLabeling {
	constructor(x, y) {
	this.x = x,
	this.y = y
	}
	drawLabel1(p) { // 100 Laternen
		p.push();
		p.translate(this.x, this.y);
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER);
		p.fill("#e21a56");
		p.textSize(18);
		p.text("12.500 Euro", 1450, 710);
		p.text("12.500 Euro", 1555, 390);
		p.text("100 %", 1270, 180);
		p.text("100 %", 890, 390);
		p.text("4.375.000", 990, 710);
		p.pop();
	}
	drawLabel2(p) { // 2000 Laternen
		p.push();
		p.translate(this.x, this.y);
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER);
		p.fill("#e21a56");
		p.textSize(18);
		p.text("250.000 Euro", 1450, 710);
		p.text("250.000 Euro", 1555, 390);
		p.text("100 %", 1270, 180);
		p.text("100 %", 890, 390);
		p.text("87.500.000", 990, 710);
		p.pop();
	}
	drawLabel3(p) { // 16000 Laternen
		p.push();
		p.translate(this.x, this.y);
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER);
		p.fill("#e21a56");
		p.textSize(18);
		p.text("2.000.000 Euro", 1450, 710);
		p.text("2.000.000 Euro", 1555, 390);
		p.text("100 %", 1270, 180);
		p.text("100 %", 890, 390);
		p.text("700.000.000", 990, 710);
		p.pop();
	}
}
