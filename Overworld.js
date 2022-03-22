class Overworld {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.children[0];
		this.ctx = this.canvas.getContext("2d");
	}
	init() {
		const image = new Image();
		image.onload = () => {
			this.ctx.drawImage(image, 0, 0);
		};
		image.src = "../assets/images/maps/underground.PNG";

		// place some game object
		const player = new GameObject({
			x: 2,
			y: 2,
		});

		const npc = new GameObject({
			x: 2,
			y: 1,
			src: "../assets/images/characters/professor.png",
		});

		setTimeout(() => {
			console.log(npc);
			player.sprite.draw(this.ctx);
			npc.sprite.draw(this.ctx);
		}, 200);
	}
}
