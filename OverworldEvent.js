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

	init() {
		return new Promise((resolve) => {
			this[this.event.type](resolve);
		});
	}
}
