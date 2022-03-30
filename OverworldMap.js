class OverworldMap {
	constructor(config) {
		this.overworld = null;
		this.gameObjects = config.gameObjects;
		this.cutsceneSpaces = config.cutsceneSpaces || {};
		this.walls = config.walls || {};

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;

		this.isCutscenePlaying = false;
		this.isPaused = false;
	}

	drawLowerImage(ctx, cameraPerson) {
		let ratio = 3.125; // perhaps to reconfigure best now 3.125
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

		for (let i = 0; i < events.length; i++) {
			const eventHandler = new OverworldEvent({
				event: events[i],
				map: this,
			});
			const result = await eventHandler.init();
			if (result === "LOST_BATTLE") {
				break;
			}
		}

		this.isCutscenePlaying = false;

		// reset npc behavior
		Object.values(this.gameObjects).forEach((object) => object.doBehaviorEvent(this));
	}

	checkForActionCutscene() {
		const player = this.gameObjects["player"];
		const nextCoords = utils.nextPosition(player.x, player.y, player.direction);
		const match = Object.values(this.gameObjects).find((object) => {
			return `${object.x}, ${object.y}` === `${nextCoords.x}, ${nextCoords.y}`;
		});
		if (!this.isCutscenePlaying && match && match.talking.length) {
			const relevantScenario = match.talking.find((scenario) => {
				return (scenario.required || []).every((sf) => {
					return playerState.storyFlags[sf];
				});
			});
			relevantScenario && this.startCutscene(relevantScenario.events);
		}
	}

	checkForFootStepCutscene() {
		const player = this.gameObjects["player"];
		const match = this.cutsceneSpaces[`${player.x},${player.y}`];
		if (!this.isCutscenePlaying && match) {
			this.startCutscene(match[0].events);
		}
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

window.OverworldMaps = {
	DemoRoom: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/mapForeground.PNG",
		gameObjects: {
			player: new Person({
				x: utils.withGrid(50),
				y: utils.withGrid(50),
				isPlayerControlled: true,
			}),
			professor: new Person({
				x: utils.withGrid(49),
				y: utils.withGrid(47),
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
				talking: [
					{
						events: [
							{ type: "textMessage", text: "Bahaha!", faceHero: "npcA" },
							{ type: "addStoryFlag", flag: "TALKED_TO_PROFESSOR" },
						],
					},
				],
			}),
			npcA: new Person({
				x: utils.withGrid(44),
				y: utils.withGrid(51),
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
				talking: [
					{
						required: ["TALKED_TO_PROFESSOR"],
						events: [{ type: "textMessage", text: "Isn't the professor the coolest?", faceHero: "npcA" }],
					},
					{
						events: [
							{ type: "textMessage", text: "I'm going to crush you!", faceHero: "npcA" },
							{ type: "battle", enemyId: "beth" },
							{ type: "addStoryFlag", flag: "DEFEATED_BETH" },
							{ type: "textMessage", text: "You crushed me like weak potato.", faceHero: "npcA" },
							// {
							// 	type: "battle",
							// 	enemyId: "beth",
							// },
							// {
							// 	who: "player",
							// 	type: "walk",
							// 	direction: "left",
							// },
						],
					},
				],
			}),
		},
		walls: utils.loadWall(collisions),
		cutsceneSpaces: {
			[utils.asGridCoords(5, 5)]: [
				{
					events: [
						{
							who: "npcA",
							type: "walk",
							direction: "down",
						},
						{
							who: "npcA",
							type: "stand",
							direction: "down",
							time: 500,
						},
						{
							type: "textMessage",
							text: "NO NO NO",
						},
						{
							who: "player",
							type: "walk",
							direction: "down",
						},
						{
							who: "player",
							type: "walk",
							direction: "left",
						},
					],
				},
			],
			[utils.asGridCoords(5, 7)]: [
				{
					events: [{ type: "changeMap", map: "House" }],
				},
			],
		},
	},
	House: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/mapForeground.PNG",
		gameObjects: {
			player: new Person({
				isPlayerControlled: true,
				x: utils.withGrid(3),
				y: utils.withGrid(8),
			}),
			npcA: new Person({
				x: utils.withGrid(10),
				y: utils.withGrid(8),
				src: "../assets/images/characters/npc_1.png",
				talking: [
					{
						events: [{ type: "textMessage", text: "You made it!", faceHero: "npcA" }],
					},
				],
			}),
		},
	},
};
