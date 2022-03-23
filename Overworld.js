class Overworld {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.children[0];
		this.ctx = this.canvas.getContext("2d");
		this.map = null;
	}

	startGameLoop() {
		const step = () => {
			// clear canvas
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			// establish camera person
			const cameraPerson = this.map.gameObjects.player;

			// update all objects
			Object.values(this.map.gameObjects).forEach((object) => {
				object.update({
					arrow: this.directionInput.direction,
					map: this.map,
				});
			});

			// draw lower layer
			this.map.drawLowerImage(this.ctx, cameraPerson);

			// draw all game objects
			Object.values(this.map.gameObjects)
				.sort((a, b) => {
					return a.y - b.y;
				})
				.forEach((object) => {
					object.sprite.draw(this.ctx, cameraPerson);
				});

			// draw upper layer
			// this.map.drawUpperImage(this.ctx, cameraPerson);
			requestAnimationFrame(() => {
				step();
			});
		};
		step();
	}

	init() {
		this.map = new OverworldMap(window.OverlordMaps.DemoRoom);
		this.map.mountObjects();

		this.directionInput = new DirectionInput();
		this.directionInput.init();
		this.directionInput.direction;

		this.startGameLoop();

		this.map.startCutscene([
			{
				who: "player",
				type: "walk",
				direction: "down",
			},
			{
				who: "player",
				type: "walk",
				direction: "down",
			},
			{
				who: "player",
				type: "walk",
				direction: "down",
			},
			{
				who: "npcA",
				type: "walk",
				direction: "left",
			},
			{
				who: "npcA",
				type: "stand",
				direction: "up",
				time: 800,
			},
		]);
	}
}
