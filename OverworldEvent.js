class OverworldEvent {
	constructor({ map, event }) {
		this.map = map;
		this.event = event;
	}

	stand(resolve) {
		const who = this.map.gameObjects[this.event.who];
		who.startBehavior(
			{
				map: this.map,
			},
			{
				type: "stand",
				direction: this.event.direction,
				time: this.event.time,
			}
		);

		// set up handler when correct person done, then resolve
		const completeHandler = (e) => {
			if (e.detail.whoId === this.event.who) {
				document.removeEventListener("PersonStandCompleted", completeHandler);
				resolve();
			}
		};
		document.addEventListener("PersonStandCompleted", completeHandler);
	}

	walk(resolve) {
		const who = this.map.gameObjects[this.event.who];
		who.startBehavior(
			{
				map: this.map,
			},
			{
				type: "walk",
				direction: this.event.direction,
				retry: true,
			}
		);

		// set up handler when correct person done, then resolve
		const completeHandler = (e) => {
			if (e.detail.whoId === this.event.who) {
				document.removeEventListener("PersonWalkCompleted", completeHandler);
				resolve();
			}
		};
		document.addEventListener("PersonWalkCompleted", completeHandler);
	}

	textMessage(resolve) {
		if (this.event.facePlayer) {
			const obj = this.map.gameObjects[this.event.facePlayer];
			obj.direction = utils.oppositeDirection(this.map.gameObjects["player"].direction);
		}

		const message = new TextMessage({
			text: this.event.text,
			onComplete: () => resolve(),
		});
		message.init(document.querySelector(".game-container"));
	}

	changeMap(resolve) {
		const sceneTransition = new SceneTransition();
		sceneTransition.init(document.querySelector(".game-container"), () => {
			this.map.overworld.startMap(window.OverworldMaps[this.event.map]);
			resolve();

			sceneTransition.fadeOut();
		});
	}

	init() {
		return new Promise((resolve) => {
			this[this.event.type](resolve);
		});
	}
}
