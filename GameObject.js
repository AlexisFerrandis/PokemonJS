class GameObject {
	constructor(config) {
		this.id = null;
		this.isMounted = false;
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.direction = config.direction || "down";
		this.sprite = new Sprite({
			gameObject: this,
			src: config.src || "../assets/images/characters/player.png",
		});

		this.behaviorLoop = config.behaviorLoop || [];
		this.behaviorLoopIndex = 0;

		this.talking = config.talking || [];
	}

	mount(map) {
		this.isMounted = true;
		map.addWall(this.x, this.y);

		// if behavior kick after little delay
		setTimeout(() => {
			this.doBehaviorEvent(map);
		}, 10);
	}

	update() {}

	async doBehaviorEvent(map) {
		// dont do anything if cutscene
		if (map.isCutscenePlaying || this.behaviorLoop.length === 0) {
			return;
		}

		// setting up event
		let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
		eventConfig.who = this.id;

		// create event instance out of our event config
		const eventHandler = new OverworldEvent({ map, event: eventConfig });
		await eventHandler.init();

		// setting next event to start
		this.behaviorLoopIndex += 1;
		if (this.behaviorLoopIndex === this.behaviorLoop.length) {
			this.behaviorLoopIndex = 0;
		}

		// do it again
		this.doBehaviorEvent(map);
	}
}
