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

	bindActionsInput() {
		new KeyPressListener("Enter", () => {
			// person to talk?
			this.map.checkForActionCutscene();
		});
	}

	bindPlayerPositionCheck() {
		document.addEventListener("PersonWalkCompleted", (e) => {
			if (e.detail.whoId === "player") {
				// player's position has changed
				this.map.checkForFootStepCutscene();
			}
		});
	}

	startMap(mapConfig) {
		this.map = new OverworldMap(mapConfig);
		this.map.overworld = this;
		this.map.mountObjects();
	}

	init() {
		this.startMap(window.OverworldMaps.DemoRoom);

		this.bindActionsInput();
		this.bindPlayerPositionCheck();

		this.directionInput = new DirectionInput();
		this.directionInput.init();
		this.directionInput.direction;

		this.startGameLoop();

		this.map.startCutscene([
			{
				type: "textMessage",
				text: "Bien le bonjour, bienvenue dans le monde de Pokemon !",
			},
		]);
	}
}
