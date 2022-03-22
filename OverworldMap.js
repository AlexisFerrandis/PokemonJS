class OverworldMap {
	constructor(config) {
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;
	}

	drawLowerImage(ctx) {
		ctx.drawImage(this.lowerImage, 0, 0);
	}

	drawUpperImage(ctx) {
		ctx.drawImage(this.upperImage, 0, 0);
	}
}

window.OverlordMaps = {
	DemoRoom: {
		lowerSrc: "../assets/images/maps/underground.PNG",
		upperSrc: "../assets/images/maps/underground.PNG",
		gameObjects: {
			player: new Person({
				x: utils.withGrid(2),
				y: utils.withGrid(2),
				isPlayerControlled: true,
			}),
			npc: new Person({
				x: utils.withGrid(3),
				y: utils.withGrid(3),
				src: "../assets/images/characters/professor.png",
			}),
		},
	},
	House: {
		lowerSrc: "./images/maps/underground.PNG",
		upperSrc: "./images/maps/underground.PNG",
		gameObjects: {
			player: new GameObject({
				x: 2,
				y: 2,
			}),
			npc: new GameObject({
				x: 2,
				y: 2,
				src: "../assets/images/characters/professor.png",
			}),
		},
	},
};
