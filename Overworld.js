class Overworld {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.getElementById("gameCanvas");
		this.ctx = this.canvas.getContext("2d");
	}
	init() {
		console.log("overworld", this);
	}
}
