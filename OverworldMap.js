class OverworldMap {
	constructor(config) {
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;
	}

	drawLowerImage(ctx, cameraPerson) {
		ctx.drawImage(this.lowerImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y, this.upperImage.width / 2, this.upperImage.height / 2);
	}

	drawUpperImage(ctx, cameraPerson) {
		ctx.drawImage(this.upperImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y, this.upperImage.width / 2, this.upperImage.height / 2);
	}
}

window.OverlordMaps = {
	DemoRoom: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/map.PNG",
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
		lowerSrc: "./images/maps/map.PNG",
		upperSrc: "./images/maps/map.PNG",
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
