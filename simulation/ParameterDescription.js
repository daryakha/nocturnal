export class ParameterDescription {
	constructor(content) {
		this.x = 82;
		this.y = 915.5;
		this.width = 547.5;
		this.height = 170;
		this.content = content;
	}
	draw(p) {
		p.fill("#ccdadb");
		p.rect(60, 798, 590, 235);
		p.textAlign(p.LEFT, p.CENTER);
		p.textSize(18);
		p.fill("#000000");
		p.text(this.content, this.x, this.y - this.height/2, this.width, this.height);
	}
}
