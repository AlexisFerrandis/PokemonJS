class OverworldMap {
	constructor(config) {
		this.gameObjects = config.gameObjects;
		this.walls = config.walls || {};

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;

		this.isCutscenePlaying = false;
	}

	drawLowerImage(ctx, cameraPerson) {
		let ratio = 3.12; // perhaps to reconfigure
		ctx.drawImage(this.lowerImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y, this.upperImage.width * ratio, this.upperImage.height * ratio);
	}

	drawUpperImage(ctx, cameraPerson) {
		ctx.drawImage(this.upperImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y, this.upperImage.width * ratio, this.upperImage.height * ratio);
	}

	isSpaceTaken(currentX, currentY, direction) {
		const { x, y } = utils.nextPosition(currentX, currentY, direction);
		return this.walls[`${x},${y}`] || false;
	}

	mountObjects() {
		Object.keys(this.gameObjects).forEach((key) => {
			// TODO determine if object need mount
			let object = this.gameObjects[key];
			object.id = key;
			object.mount(this);
		});
	}

	async startCutscene(events) {
		this.isCutscenePlaying = true;
		console.log(events);

		for (let i = 0; i < events.length; i++) {
			const eventHandler = new OverworldEvent({
				event: events[i],
				map: this,
			});
			await eventHandler.init();
		}

		this.isCutscenePlaying = false;
	}

	addWall(x, y) {
		this.walls[`${x},${y}`] = true;
	}
	removeWall(x, y) {
		delete this.walls[`${x},${y}`];
	}
	moveWall(wasX, wasY, direction) {
		this.removeWall(wasX, wasY);
		const { x, y } = utils.nextPosition(wasX, wasY, direction);
		this.addWall(x, y);
	}
}

window.OverlordMaps = {
	DemoRoom: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/mapForeground.PNG",
		gameObjects: {
			player: new Person({
				x: utils.withGrid(4),
				y: utils.withGrid(4),
				isPlayerControlled: true,
			}),
			professor: new Person({
				x: utils.withGrid(3),
				y: utils.withGrid(3),
				src: "../assets/images/characters/professor.png",
				behaviorLoop: [
					{
						type: "walk",
						direction: "left",
					},
					{
						type: "stand",
						direction: "up",
						time: 800,
					},
					{
						type: "walk",
						direction: "up",
					},
					{
						type: "walk",
						direction: "right",
					},
					{
						type: "walk",
						direction: "down",
					},
				],
			}),
			npcA: new Person({
				x: utils.withGrid(5),
				y: utils.withGrid(1),
				src: "../assets/images/characters/npc_1.png",
				behaviorLoop: [
					{
						type: "stand",
						direction: "left",
						time: 800,
					},
					{
						type: "stand",
						direction: "up",
						time: 800,
					},
					{
						type: "stand",
						direction: "right",
						time: 800,
					},
					{
						type: "stand",
						direction: "up",
						time: 200,
					},
				],
			}),
		},
		walls: utils.loadWall(collisions),
	},
	// House: {
	// 	lowerSrc: "./images/maps/map.PNG",
	// 	upperSrc: "./images/maps/map.PNG",
	// 	gameObjects: {
	// 		player: new GameObject({
	// 			x: 2,
	// 			y: 2,
	// 		}),
	// 		npc: new GameObject({
	// 			x: 2,
	// 			y: 2,
	// 			src: "../assets/images/characters/professor.png",
	// 		}),
	// 	},
	// },
};
